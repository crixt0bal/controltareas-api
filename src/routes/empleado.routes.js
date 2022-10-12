import { Router } from "express";
import { methods as empleadoController } from "../controllers/empleado.controller";

const router = Router();

//Empleado
router.get("/", empleadoController.obtenerEmpleados);
router.get("/:id/", empleadoController.obtenerEmpleado);
router.get("/login", empleadoController.login);
router.post("/", empleadoController.crearEmpleado);


export default router;