import express from "express";
import morgan from "morgan";
//Routes
import controltareasRoutes from "./routes/controltareas.routes";

const app=express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));

// Routes
app.use("/api/tareas", controltareasRoutes);

export default app;
