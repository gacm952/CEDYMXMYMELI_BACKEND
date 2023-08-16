import Doctors from "../models/Doctors.js";

const newDoctor = async (req, res) => {

        const doctor = new Doctors(req.body);

        try {

        const doctorSaved = await doctor.save();

        res.json(doctorSaved);
        
      } catch (error) {
        res.json(error);
      }
};

const allDoctors = async (req, res) => {

  const doctors = await Doctors.find();

  res.json(doctors);
  
};

const updateDataDoctor = async (req, res) => {
 
    const { id } = req.params;
  
    let doctor;
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('El ID del Usuario no es valido');
      return res.status(400).json({ msg: error.message });
    }
    try {
      doctor = await Doctors.findById(id.trim());
  
      if (!doctor) {
        const error = new Error('EL USUARIO NO EXISTE');
        return res.status(404).json({ msg: error.message });
      }
  
      if (doctor.doctorId !== req.user._id.toString() && req.user.role !== "Admin") {
        const error = new Error("ACCIÓN NO VALIDA");
        return res.status(403).json({msg: error.message});
      }
  
     // Guardando los cambios realizados || Se mantienen los datos
  
     doctor.Specialty = req.body.Specialty || doctor.Specialty;
     doctor.SchedulesAvailable = req.body.SchedulesAvailable || doctor.SchedulesAvailable;
     doctor.Clinic = req.body.Clinic || doctor.Clinic; 
     doctor.Available = False || doctor.Available;
  
      const updateDataDoctor = await doctor.save();
        
          res.json(updateDataDoctor);
      } catch (error) {
          console.log(error)
      }
  }


export {
    newDoctor,
    allDoctors,
    updateDataDoctor
}