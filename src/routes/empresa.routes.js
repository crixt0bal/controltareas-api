import { Router } from "express";
import { methods as empresaController } from "./../controllers/empresa.controller";

const router = Router();

//Empresa
router.get("/:id", empresaController.obtenerEmpresa);
router.post("/", empresaController.crearEmpresa);


export default router;