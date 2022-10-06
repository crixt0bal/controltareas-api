import { Router } from "express";
import { methods as controltareasController } from "./../controllers/controltareas.controller";


const router = Router();

router.get("/", controltareasController.obtenerTareas);
router.get("/:id", controltareasController.obtenerTarea);
router.put("/finalizar/:id", controltareasController.finalizarTarea);
router.post("/", controltareasController.crearTarea);
router.put("/:id", controltareasController.modificarTarea);
router.get("/empresas/:id", controltareasController.obtenerEmpresa);
router.post("/Empresa", controltareasController.crearEmpresa);
router.post("/UnidadInterna", controltareasController.crearUnidadInterna);
router.get("/porcentaje/:id", controltareasController.obtenerPorcentaje);
router.put("/aceptartarea/:id", controltareasController.aceptarTarea);




export default router;