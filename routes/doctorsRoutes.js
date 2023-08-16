import express from "express";
import { newDoctor, allDoctors, updateDataDoctor } from "../controllers/DoctorsController.js";

const router = express.Router();

router
.route("/newdoctor").post(newDoctor)

router
.route("/alldoctors").get(allDoctors)

router
.route("/:id/updatedatadoctor").put(updateDataDoctor)


export default router;