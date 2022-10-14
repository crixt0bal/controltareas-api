import { getConnection } from "./../database/database";



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

const obtenerEmpresas = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_listar_empresas()`);
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const obtenerEmpresa = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_listar_una_empresa(?)`, id);
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    crearEmpresa,
    obtenerEmpresa,
    obtenerEmpresas
    
};