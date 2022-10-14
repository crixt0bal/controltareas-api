import { getConnection } from "./../database/database";
import { comparar } from "../helpers/handleBcrypt.js";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { cookie } from "express-validator";


const login = async (req, res) => {
    const { usuario, contrasena } = req.body;
    const queryConsulta = `SELECT * FROM Empleado WHERE usuario = ?`;
    try {
        const connection = await getConnection();
        const result = await connection.query(queryConsulta, [usuario]);
        if (result.length <= 0)
        return res.status(404).json({ message: "Usuario no encontrado" });
        const hashPassword = result[0].contrasena;
        // Comparar la contraseña que viene de front con la de la BD
        const comparedPass = await comparar(contrasena, hashPassword);
        if (!comparedPass) return res.json({ message: "Contraseña no coincide" });

        const { rut, cargo_empleado, id_empresa, id_unida, correo_electronico } = result[0];
        // secret es la palabra secreta para el token. Reemplazar con una varaible de entorno ayuda a hacerla aún más secreta
        const token = jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
            rut,
            contrasena,
            usuario,
            cargo_empleado,
            id_empresa,
            id_unida,
            correo_electronico,
        },
        "secret"
        );
        // Serialización del token con una cookie
        const serialized = serialize("loginToken", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "none",
            maxAge: 1000 * 60 * 60 * 24,
            path: "/",
        });
        res.setHeader("Set-Cookie", serialized);
        res.json(result[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
    
    
};

export const logout = (req, res) => {
    const { loginToken } = req.body;
    if (!loginToken)
      return res.status(401).json({ error: "No hay un usuario autenticado" });
  
    try {
      jwt.verify(loginToken, "secret");
      const serialized = serialize("loginToken", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "none",
        maxAge: 0,
        path: "/",
      });
      res.setHeader("Set-Cookie", serialized);
      res.status(200).json({ message: "Logout exitoso" });
    } catch (error) {
      return res.status(401).json({ message: "Token inválido" });
    }
};



export const methods = {
    login,
    logout
}