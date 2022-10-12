import { getConnection } from "./../database/database";

const obtenerEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_listar_todos_empleados()`);
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const obtenerEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_listar_un_empleado(?)`, id);
        res.json(result[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const crearEmpleado = async (req, res) => {
    try {
        const { rut, nombres,
             apellidos, correo_electronico, usuario, contrasena, 
             activo, cargo_empleado, id_empresa, id_unida } = req.body;

        // if (rut === undefined || nombres === undefined) {
        //     res.status(400).json({ message: "Bad Request. Please fill all field." });
        // }

        const empleado = { rut, nombres, apellidos, correo_electronico, usuario, contrasena, activo, cargo_empleado, id_empresa, id_unida };
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_crear_empleado(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [empleado.rut, empleado.nombres, empleado.apellidos, empleado.correo_electronico, empleado.usuario, empleado.contrasena, empleado.activo, empleado.cargo_empleado, empleado.id_empresa, empleado.id_unida]);
        res.json({ message: "Empleado agregado" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const login = async (req, res) => {
    try {
        const { usuario, contrasena } = req.body;

        const user = {usuario, contrasena};
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_Login(?, ?)`, user.usuario, user.contrasena);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


export const methods = {
    crearEmpleado,
    obtenerEmpleado,
    obtenerEmpleados,
    login
}
