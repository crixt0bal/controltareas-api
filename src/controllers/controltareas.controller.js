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
        const { id_tarea } = req.body;

        // if (id === undefined || descripcion === undefined || nombre === undefined) {
        //     res.status(400).json({ message: "Bad Request. Please fill all field." });
        // }

        const tarea = {id_tarea };
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_finalizar_tarea(?, ?)`, [id, tarea.id_tarea]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const aceptarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_tarea, id_empleado } = req.body;

        // if (id === undefined || descripcion === undefined || nombre === undefined) {
        //     res.status(400).json({ message: "Bad Request. Please fill all field." });
        // }

        const tarea = {id_tarea, id_empleado };
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_aceptar_tarea(?, ?, ?)`, [id, tarea.id_tarea, tarea.id_empleado]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const rechazarTarea = async (req, res) => {
    try {
        const { id } = req.params;
        const { id_tarea, id_empleado } = req.body;

        // if (id === undefined || descripcion === undefined || nombre === undefined) {
        //     res.status(400).json({ message: "Bad Request. Please fill all field." });
        // }

        const tarea = {id_tarea, id_empleado };
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_rechazar_tarea(?, ?, ?)`, [id, tarea.id_tarea, tarea.id_empleado]);
        res.json(result);
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


const tareasEmpleado = async (req, res) => {
    try {
        const { id_empleado } = req.params;

        const connection = await getConnection();
        const result = await connection.query(`CALL SP_tareas_empleado(?)`, id_empleado);
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
    obtenerPorcentaje,
    aceptarTarea,
    rechazarTarea,
    tareasEmpleado
    

};