import { Router } from "express";
import { methods as controltareasController } from "./../controllers/controltareas.controller";
import { methods as empresaController } from "./../controllers/empresa.controller";
import { methods as unidadinternaController } from "./../controllers/unidadinterna.controller";


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
//Empresa
router.get("/empresas/:id", empresaController.obtenerEmpresa);
router.post("/empresa", empresaController.crearEmpresa);
//Unidad Interna
router.post("/unidadInterna", unidadinternaController.crearUnidadInterna);






export default router;