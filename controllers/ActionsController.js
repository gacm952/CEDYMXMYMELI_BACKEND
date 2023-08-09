import Actions from "../models/Actions.js";

const userRegistered = async (req, res) => {
  const { document, typeDocument } = req.body;
    
        const action = new Actions(req.body);
        action.realizedBy = req.body.realizedBy;
        action.Action = "Nuevo Registro para: " + typeDocument + " " + document;

        try {

        const actionSaved = await action.save();

        res.json(actionSaved);
        
      } catch (error) {
        res.json(error);
      }
};

const newPasswordCreated = async (req, res) => {
  const { realizedBy } = req.body;

  const action = new Actions(req.body);
  action.realizedBy = realizedBy;
  action.Action = "Nueva Contraseña Creada" ;

  try {
      const actionSaved = await action.save();

      res.json(actionSaved);

    } catch (error) {
      res.status(500).json({ error: 'Error al crear la acción de crear una nueva contraseña' });
    }
}

const bookingCreated = async (req, res) => {
    const { Target, realizedBy, Action } = req.body;

    const action = new Actions(req.body);
    action.realizedBy = realizedBy;
    action.Target = Target || realizedBy;
    action.Action = "Nueva cita de " + Action

    try {
        const actionSaved = await action.save();

        res.json(actionSaved);

      } catch (error) {
        res.status(500).json({ error: 'Error al crear la acción de crear cita' });
      }
}

const editBooking = async (req, res) => {
    const { Target, realizedBy, Action } = req.body;

    const action = new Actions(req.body);
    action.realizedBy = realizedBy;
    action.Target = Target || realizedBy;
    action.Action = "Cita editada a " + Action;

    try {
        const actionSaved = await action.save();

        res.json(actionSaved);

      } catch (error) {
        res.status(500).json({ error: 'Error al crear la acción de editar cita' });
      }
}

const cancelBookingAct = async (req, res) => {
  const { Target, realizedBy, Action } = req.body;

    const action = new Actions(req.body);
    action.realizedBy = realizedBy;
    action.Target = Target;
    action.Action = Action;

    try {
        const actionSaved = await action.save();

        res.json(actionSaved);

      } catch (error) {
        res.status(500).json({ error: 'Error al crear la acción de cancelar cita' });
      }
}

const closeOfTheDay = async (req, res) => {
    const { Target, realizedBy, Action } = req.body;

    const action = new Actions(req.body);
    action.realizedBy = realizedBy;
    action.Target = Target;
    action.Action = Action;

    try {
        const actionSaved = await action.save();

        res.json(actionSaved);

      } catch (error) {
        res.status(500).json({ error: 'Error al crear la acción del cierre del dia' });
      }
}

const statusChanged = async (req, res) => {
  const { Target, realizedBy, Action } = req.body;

    const action = new Actions(req.body);
    action.realizedBy = realizedBy
    action.Target = Target
    action.Action = Action

    try {
        const actionSaved = await action.save();

        res.json(actionSaved);

      } catch (error) {
        res.status(500).json({ error: 'Error al crear la acción de actualizar estado' });
      }
}

const massiveReBookingAct = async (req, res) => {
    const { realizedBy, Action } = req.body;

    const action = new Actions(req.body);
    action.realizedBy = realizedBy;
    action.Action = Action;

    try {
        const actionSaved = await action.save();

        res.json(actionSaved);

      } catch (error) {
        res.status(500).json({ error: 'Error al crear la acción de reprogramar masivamente' });
      }
}

const subscriptionPlanAction = async (req, res) => {
  const { Target, realizedBy, Action } = req.body;

  const action = new Actions(req.body);
  action.realizedBy = realizedBy;
  action.Target = Target || realizedBy;
  action.Action = Action

  try {
      const actionSaved = await action.save();

      res.json(actionSaved);

    } catch (error) {
      res.status(500).json({ error: 'Error al crear la acción de la suscripcion al plan' });
    }
}

export { 
    userRegistered,
    newPasswordCreated,
    bookingCreated,
    editBooking,
    cancelBookingAct,
    closeOfTheDay,
    statusChanged,
    massiveReBookingAct,
    subscriptionPlanAction
};