import Plans from "../models/Plans.js";

const newPlan = async (req, res) => {

        const plan = new Plans(req.body);

        try {

        const planSaved = await plan.save();

        res.json(planSaved);
        
      } catch (error) {
        res.json(error);
      }
};

export {
    newPlan
}