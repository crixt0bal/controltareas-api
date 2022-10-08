import { Router } from "express";
import { methods as controltareasController } from "./../controllers/controltareas.controller";




const router = Router();

//Tarea
router.get("/", controltareasController.obtenerTareas);
router.get("/:id", controltareasController.obtenerTarea);
router.put("/finalizar/:id", controltareasController.finalizarTarea);
router.post("/", controltareasController.crearTarea);
router.put("/:id", controltareasController.modificarTarea);
router.get("/porcentaje/:id", controltareasController.obtenerPorcentaje);
router.put("/aceptartarea/:id", controltareasController.aceptarTarea);
router.put("/rechazartarea/:id", controltareasController.rechazarTarea);
router.get("/tareasempleado/:id_empleado", controltareasController.tareasEmpleado);





export default router;