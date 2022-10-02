import { Router } from "express";
import { methods as controltareasController } from "./../controllers/controltareas.controller";


const router = Router();

router.get("/", controltareasController.obtenerTareas);

export default router;