import mongoose from "mongoose";
import { getDailyDoctorModelForMonth } from "../models/MonthlyDoctors.js";
import { getAllDoctors } from "../controllers/DoctorsController.js";
import conectarDB from "../config/db.js";
import fs from "fs";
import path from "path";
import url from "url";
import cron from "node-cron";

mongoose.set('maxTimeMS', 30000);

async function createDailyDataForDoctors(doctors, startDate, endDate, DailyDoctorModel) {
  try {
    for (const doctor of doctors) {
      if (doctor.Active === true) {  
        for (let currentDate = new Date(startDate); currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
          const dailyData = {
            doctorId: doctor.doctorId,
            date: currentDate,
            morning: "8:00 12:00",   
            late: "2:00 18:00", 
          };

          await DailyDoctorModel.create(dailyData);
        }
      }
    }
  } catch (error) {
    console.error("Error al crear datos diarios:", error);
  }
}

const currentDate = new Date();
const currentMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
const currentMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
const nextMonthStartDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
const nextMonthEndDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 2, 0);

// Conectar a la base de datos antes de crear datos
conectarDB().then(async () => {
  // Se ejecutara cada primero de mes
  cron.schedule('0 0 1 * *', async () => {
    try {
      // Obtener la ruta actual del archivo
      const currentFileUrl = import.meta.url;
      const currentModuleDir = path.dirname(url.fileURLToPath(currentFileUrl));

      const dailyDoctorModelForCurrentMonth = getDailyDoctorModelForMonth(currentMonthStartDate);
      const dailyDoctorModelForNextMonth = getDailyDoctorModelForMonth(nextMonthStartDate);

      // Verificar si ya existen datos para el mes actual y siguiente
      const currentMonthExists = await dailyDoctorModelForCurrentMonth.exists({ date: currentMonthStartDate });
      const nextMonthExists = await dailyDoctorModelForNextMonth.exists({ date: nextMonthStartDate });

      if (!currentMonthExists) {
        // Crear carpeta para el mes actual
        const currentYear = currentMonthStartDate.getFullYear();
        const currentMonthName = currentMonthStartDate.toLocaleString("default", { month: "long" });
        const currentMonthFolder = path.join(currentModuleDir, `${currentYear}_${currentMonthName.toLowerCase()}`);
        fs.mkdirSync(currentMonthFolder, { recursive: true });

        const doctors = await getAllDoctors();
        console.log(doctors)

        // Crear datos diarios para el mes actual
        await createDailyDataForDoctors(doctors, currentMonthStartDate, currentMonthEndDate, dailyDoctorModelForCurrentMonth);
        console.log("Datos diarios para el mes actual creados correctamente");
      } else {
        console.log("Ya existen datos para el mes actual, no se crearon nuevos datos.");
      }

      if (!nextMonthExists) {
        // Crear carpeta para el siguiente mes
        const nextYear = nextMonthStartDate.getFullYear();
        const nextMonthName = nextMonthStartDate.toLocaleString("default", { month: "long" });
        const nextMonthFolder = path.join(currentModuleDir, `${nextYear}_${nextMonthName.toLowerCase()}`);
        fs.mkdirSync(nextMonthFolder, { recursive: true });

        const doctors = await getAllDoctors();

        // Crear datos diarios para el siguiente mes
        await createDailyDataForDoctors(doctors, nextMonthStartDate, nextMonthEndDate, dailyDoctorModelForNextMonth);
        console.log("Datos diarios para el siguiente mes creados correctamente");
      } else {
        console.log("Ya existen datos para el siguiente mes, no se crearon nuevos datos.");
      }
    } catch (error) {
      console.error("Error en la creación de datos diarios:", error);
    }
  });
});