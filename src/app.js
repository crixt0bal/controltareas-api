import express from "express";
import morgan from "morgan";
//Routes
import controltareasRoutes from "./routes/controltareas.routes";
import empleadosRoutes from "./routes/empleado.routes";
import empresasRoutes from "./routes/empresa.routes";
import unidadesinternasRoutes from "./routes/unidadinterna.routes";

const app=express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/tareas", controltareasRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/empresas", empresasRoutes);
app.use("/api/unidades", unidadesinternasRoutes);

export default app;
