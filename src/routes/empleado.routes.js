import { Router } from "express";
import { methods as empleadoController } from "../controllers/empleado.controller";
const { validateCreateAndUpdateEmpleado } = require('../validators/empleados');

const router = Router();

//Empleado
router.get("/", empleadoController.obtenerEmpleados);
router.get("/:id", empleadoController.obtenerEmpleado);
router.post("/", validateCreateAndUpdateEmpleado, empleadoController.crearEmpleado);


export default router;