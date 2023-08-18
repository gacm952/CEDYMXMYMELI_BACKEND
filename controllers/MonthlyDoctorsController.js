import mongoose from "mongoose";
import { getDailyDoctorModelForMonth } from "../models/MonthlyDoctors.js";
import conectarDB from "../config/db.js";

mongoose.set('maxTimeMS', 30000);

async function createDailyDataForDoctors(doctors, startDate, endDate, DailyDoctorModel) {
  try {
    for (const doctor of doctors) {
      for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
        const dailyData = {
          doctorId: doctor.doctorId,
          date: currentDate,
          data: currentDate, // Agrega aquí la información específica para cada día
        };

        await DailyDoctorModel.create(dailyData);
      }
    }
  } catch (error) {
    console.error("Error al crear datos diarios:", error);
  }
}

const doctors = [
  { doctorId: new mongoose.Types.ObjectId("244324") },
];

const currentDate = new Date();
const currentMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const nextMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const nextMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);

const dailyDoctorModelForNextMonth = getDailyDoctorModelForMonth(nextMonthStartDate);

async function createDataForCurrentAndNextMonth() {
  try {
    await createDailyDataForDoctors(doctors, currentMonthStartDate, nextMonthEndDate, dailyDoctorModelForNextMonth);
    console.log("Datos diarios para el mes actual creados correctamente");

    await createDailyDataForDoctors(doctors, nextMonthStartDate, nextMonthEndDate, dailyDoctorModelForNextMonth);
    console.log("Datos diarios para el siguiente mes creados correctamente");
  } catch (error) {
    console.error("Error en la creación de datos diarios:", error);
  }
}

// Conectar a la base de datos antes de crear datos
conectarDB().then(() => {
  createDataForCurrentAndNextMonth();
});