import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import actionsRoutes from "./routes/actionsRoutes.js";
import plansRoutes from "./routes/plansRoutes.js";
import doctorsRoutes from "./routes/doctorsRoutes.js"

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

// Configurar CORS de manera más simple

const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
    origin: function(origin, callback) {
        if (whitelist.includes(origin)) {
            // Puede consultar la API
            callback(null, true);
        } else {
            // No puede consultar la API
            callback(new Error("Error de Cors"));
        }
    }, 
};

app.use(cors(corsOptions)); 

// Routing

app.use("/", userRoutes);
app.use("/", bookingRoutes);
app.use("/", actionsRoutes);
app.use("/", plansRoutes);
app.use("/doctors", doctorsRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

