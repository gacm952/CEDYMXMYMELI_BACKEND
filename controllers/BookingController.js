import mongoose from "mongoose"; 
import Booking from "../models/Booking.js";

const createBooking = async (req, res) => {
    const { bookingTo } = req.body;

    const booking = new Booking(req.body);
    booking.bookingFor = req.user._id;
    booking.bookingTo = bookingTo || req.user._id;

    try {
        booking.Status = 'Active';

        const bookingSaved = await booking.save();

        res.json(bookingSaved);

    } catch (error) {
      res.status(500).json({ msg: 'Error al crear la cita' });
    }
}

const getBookings = async (req, res) => {

    const bookings = await Booking.find().where('bookingFor').equals(req.user);

    res.json(bookings);
}

const getDateBookings = async (req, res) => {

    const bookings = await Booking.find();

    res.json(bookings);
}

const getAllBookings = async (req, res) => {

    const bookings = await Booking.find();

    res.json(bookings);
}

const getBooking = async (req, res) => {

    const { id } = req.params;

    let booking;

    if(mongoose.Types.ObjectId.isValid(id)) {
    booking = await Booking.findById(id.trim());
    } else { 
        const error = new Error('El proyecto no fue encontrado');
        return res.status(404).json({ msg: error.message});
      }

      if (booking.bookingFor.toString() !== req.user._id.toString() && req.user.role !== "Admission") {
        const error = new Error("ACCIÓN NO VALIDA");
        return res.status(403).json({msg: error.message});
      }

 res.json(booking)

}

const reBooking = async (req, res) => {
  const { id } = req.params;
  
  let booking;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    const error = new Error('El ID de la cita no es válido');
    return res.status(400).json({ msg: error.message });
  }
  try {
    booking = await Booking.findById(id.trim());

    if (!booking) {
      const error = new Error('LA CITA NO EXISTE');
      return res.status(404).json({ msg: error.message });
    }

    if (booking.bookingFor.toString() !== req.user._id.toString() && req.user.role !== "Admission") {
      const error = new Error("ACCIÓN NO VALIDA");
      return res.status(403).json({msg: error.message});
    }

    // Guardando los cambios realizados || Se mantienen los datos

    booking.Type = req.body.Type || booking.Type;
    booking.subType = req.body.subType || booking.subType;
    booking.Motive = req.body.Motive || booking.Motive;
    booking.dateHour = req.body.dateHour || booking.dateHour; 
    booking.editedBy = req.user._id;

        const newReBooking = await booking.save();

        res.json(newReBooking);
    } catch (error) {
        console.log(error)
    }
}

const massiveReBooking = async (req, res) => {
  const { ids, newDateHours } = req.body;
  
  let bookings;

  if (!Array.isArray(ids)) {
    return res.status(400).json({ msg: "Los IDs de las citas deben ser proporcionados como un array" });
  }

  try {
    bookings = await Booking.find({ _id: { $in: ids } });

    if (bookings.length === 0) {
      return res.status(404).json({ msg: "No se encontraron citas para los IDs proporcionados" });
    }

    if (req.user.role !== "Admission") {
      return res.status(403).json({ msg: "Acción no válida. Se requiere el rol de Admission" });
    }

    for (let i = 0; i < bookings.length; i++) {
      const booking = bookings[i];
      
      // Aplica la lógica de reprogramación y actualización para cada cita
      booking.dateHour = newDateHours[i] || booking.dateHour;

      // Guarda los cambios realizados en cada cita
      await booking.save();
    }

    res.json( bookings );

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocurrió un error en el servidor" });
  }
};

const cancelBooking = async (req, res) => {
    const { id } = req.params;
  
    let booking;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('El ID de la cita no es válido');
      return res.status(400).json({ msg: error.message });
    }
  
    try {
      booking = await Booking.findById(id.trim());
  
      if (!booking) {
        const error = new Error('LA CITA NO EXISTE');
        return res.status(404).json({ msg: error.message });
      }

      if (booking.bookingFor.toString() !== req.user._id.toString() && req.user.role !== "Admission") {
        const error = new Error("ACCIÓN NO VALIDA");
        return res.status(403).json({msg: error.message});
      }

      booking.Status = req.body.Status || booking.Status;

      booking.cancelledBy = req.user._id;

      const cancelBookingStatus = await booking.save();

      res.json(cancelBookingStatus);
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error al eliminar la cita' });
    }
  };

const updateStatusUser = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
  
    let booking;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('El ID de la cita no es válido');
      return res.status(400).json({ msg: error.message });
    }
  
    try {
      booking = await Booking.findById(id.trim());
  
      if (!booking) {
        const error = new Error('LA CITA NO EXISTE');
        return res.status(404).json({ msg: error.message });
      }

      if (booking.bookingFor.toString() !== req.user._id.toString() && req.user.role !== "Admission") {
        const error = new Error("ACCIÓN NO VALIDA");
        return res.status(403).json({msg: error.message});
      }

      // Si no se envió ninguna contraseña, actualiza el estado sin validar la contraseña del administrador
      if (!password) {
        booking.Status = req.body.Status || booking.Status;
      } else {
        // Si se envió una contraseña, realiza la validación con la contraseña del administrador
        const adminPassword = process.env.ADMIN_PASSWORD; // Obtén la contraseña del administrador desde tu almacenamiento seguro
        if (password !== adminPassword) {
          const error = new Error("Contraseña de administrador incorrecta");
          return res.status(403).json({ msg: error.message });
        }
        booking.Status = req.body.Status || booking.Status;
      }

      const updateStatus = await booking.save();

      res.json(updateStatus)
      
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: 'Error al actualizar la cita' });
    }
  };

export {
    createBooking,
    getBookings,
    getDateBookings,
    getBooking,
    cancelBooking,
    reBooking,
    getAllBookings,
    updateStatusUser,
    massiveReBooking
}