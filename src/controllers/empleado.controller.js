import { getConnection } from "./../database/database";

const crearEmpleado = async (req, res) => {
    try {
        const { rut, nombres,
             apellidos, correo_electronico, usuario, contrasena, 
             activo, cargo_empleado, id_empresa, id_unida } = req.body;

        if (descripcion === undefined || nombre === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const empleado = { rut, nombres,
            apellidos, correo_electronico, usuario, contrasena, 
            activo, cargo_empleado, id_empresa, id_unida };
        const connection = await getConnection();
        const result = await connection.query('CALL SP_empleado_password_hashing(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [empleado.rut,
             empleado.nombres, empleado.apellidos, empleado.correo_electronico, empleado.usuario, empleado.contrasena,
              empleado.activo, empleado.cargo_empleado, empleado.id_empresa, empleado.id_unida]);
        res.json({ message: "Empleado añadido" });
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const obtenerEmpleado = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(`CALL SP_LISTAR_EMPLEADO(?)`, id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    crearEmpleado,
    obtenerEmpleado
}
