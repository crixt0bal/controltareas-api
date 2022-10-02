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

export const methods = {
    obtenerTareas
};