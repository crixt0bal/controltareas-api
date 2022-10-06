import { getConnection } from "./../database/database";


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


export const methods = {
    crearUnidadInterna,
    

};