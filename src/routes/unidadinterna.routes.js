import { Router } from "express";
import { methods as unidadinternaController } from "./../controllers/unidadinterna.controller";

const router = Router();

//Unidad Interna
router.post("/", unidadinternaController.crearUnidadInterna);



export default router;