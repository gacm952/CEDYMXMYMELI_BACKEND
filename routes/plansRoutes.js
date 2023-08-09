import express from "express";
import { newPlan } from "../controllers/PlansController.js";
const router = express.Router();

router
.route("/newplan")
.post(newPlan)

export default router;