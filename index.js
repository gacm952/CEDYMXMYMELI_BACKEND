import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import actionsRoutes from "./routes/actionsRoutes.js";
import plansRoutes from "./routes/plansRoutes.js";

const app = express();
app.use(express.json());
dotenv.config();

conectarDB();

// Configurar CORS de manera más simple

const corsOptions = {
    origin: "https://app.cedym.co",
};
app.use(cors(corsOptions));

// Routing

app.use("/", userRoutes);
app.use("/", bookingRoutes);
app.use("/", actionsRoutes);
app.use("/", plansRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
