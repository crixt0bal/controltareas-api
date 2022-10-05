import express from "express";
import morgan from "morgan";
//Routes
import controltareasRoutes from "./routes/controltareas.routes";

const app=express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/tareas", controltareasRoutes);
app.use("/api/empresas", controltareasRoutes);

export default app;
