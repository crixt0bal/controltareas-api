import { Router } from "express";
import { methods as controltareasController } from "./../controllers/controltareas.controller";


const router = Router();

router.get("/", controltareasController.obtenerTareas);
router.get("/:id", controltareasController.obtenerTarea);
router.put("/finalizar/:id", controltareasController.finalizarTarea);
router.post("/", controltareasController.crearTarea);
router.put("/:id", controltareasController.modificarTarea);




export default router;