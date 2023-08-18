import mongoose from "mongoose";
import { getDailyDoctorModelForMonth } from "../models/MonthlyDoctors.js";

mongoose.set('maxTimeMS', 30000);

// Definir función simulada para obtener una cadena de mes y año
function getMonthYearString(date) {
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month.toUpperCase()}${year}`;
}

async function createDailyDataInBatches(doctors, startDate, endDate, DailyDoctorModel, batchSize = 1) {
  const batchData = [];

  for (const doctor of doctors) {
    for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const dailyData = {
        doctorId: doctor.doctorId,
        date: currentDate,
        data: currentDate, // Agrega aquí la información específica para cada día
      };

      batchData.push(dailyData);

      if (batchData.length >= batchSize) {
        try {
          await DailyDoctorModel.insertMany(batchData);
          batchData.length = 0; // Limpiar el array de lotes
        } catch (error) {
          console.error("Error al crear datos diarios:", error);
        }
      }
    }
  }

  // Insertar los datos restantes si hay alguno
  if (batchData.length > 0) {
    try {
      await DailyDoctorModel.insertMany(batchData);
    } catch (error) {
      console.error("Error al crear datos diarios:", error);
    }
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
    await createDailyDataForDoctors(doctors, currentMonthStartDate, nextMonthEndDate, getDailyDoctorModelForMonth(nextMonthStartDate));
    console.log("Datos diarios para el mes actual creados correctamente");

    const nextMonthModel = getDailyDoctorModelForMonth(nextMonthStartDate);
    await createDailyDataForDoctors(doctors, nextMonthStartDate, nextMonthEndDate, nextMonthModel);
    console.log("Datos diarios para el siguiente mes creados correctamente");
  } catch (error) {
    console.error("Error en la creación de datos diarios:", error);
  }
}

// Conectar a la base de datos antes de crear datos
conectarDB().then(() => {
  createDataForCurrentAndNextMonth();
});