import { getConnection } from "./../database/database";



const obtenerTareas = async (req, res) => {
    try {
        const connection = await getConnection();
        const sp = `CALL SP_listar_todas_tareas()`
        const result = await connection.query(sp);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const obtenerTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_listar_una_tarea(?)`, id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const crearTarea = async (req, res) => {
    try {
        const { descripcion, inicio,
             termino, repetible, activo, estado, 
             creador, tarea_anterior, nombre, Proceso_idProceso } = req.body;

        if (descripcion === undefined || nombre === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const tarea = { descripcion, inicio, termino, repetible, activo, estado, creador, tarea_anterior, nombre, Proceso_idProceso };
        const connection = await getConnection();
        const result = await connection.query('CALL SP_crear_tarea(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [tarea.descripcion, tarea.inicio, tarea.termino, tarea.repetible, tarea.activo, tarea.estado, tarea.creador, tarea.tarea_anterior, tarea.nombre, tarea.Proceso_idProceso]);
        res.json({ message: "Tarea añadida" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const modificarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const { descripcion, inicio, termino, repetible, activo, estado, creador, tarea_anterior, nombre, Proceso_idProceso } = req.body;

        if (id === undefined || descripcion === undefined || nombre === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const tarea = {descripcion, inicio, termino, repetible, activo, estado, creador, tarea_anterior, nombre, Proceso_idProceso };
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_modificar_tarea(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [id, tarea.descripcion, tarea.inicio, tarea.termino, tarea.repetible, tarea.activo, tarea.estado, tarea.creador, tarea.tarea_anterior, tarea.nombre, tarea.Proceso_idProceso]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
const finalizarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_finalizar_tarea_2(?)`, id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const crearEmpresa = async(req, res) => {
    try{
        const {nombre_empresa} = req.body;

        if (nombre_empresa === undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const empresa = {nombre_empresa};
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_crear_empresa(?)`,[empresa.nombre_empresa]);
        res.json({message: "Empresa añadida"});
    }catch(error){
        res.status(500);
        res.send(error.message);
    }

};


const obtenerEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_listar_una_empresa(?)`, id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const crearUnidadInterna = async (req, res) => {
    try {
        const { descripcion, id_empresa} = req.body;

        if (descripcion === undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const unidadinterna = { descripcion, id_empresa };
        const connection = await getConnection();
        const result = await connection.query('CALL SP_crear_unidad_interna(?, ?)', [unidadinterna.descripcion, unidadinterna.id_empresa]);
        res.json({ message: "Unidad Interna añadida" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const obtenerPorcentaje = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_total_avance_porc_proceso(?)`, id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



export const methods = {
    obtenerTareas,
    obtenerTarea,
    crearTarea,
    finalizarTarea,
    modificarTarea,
    crearEmpresa,
    obtenerEmpresa,
    crearUnidadInterna,
    obtenerPorcentaje
    

};