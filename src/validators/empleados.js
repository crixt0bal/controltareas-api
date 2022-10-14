const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreateAndUpdateEmpleado = [
    check('rut')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 9, min: 8})
    .matches(/^[0-9|k]*$/),
    check('nombres')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 100}),
    check('apellidos')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 100}),
    check('correo_electronico')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 100})
    .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    check('usuario')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 50}),
    check('contrasena')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 255})
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    // Debe contener mínimo ocho caracteres, al menos una letra y un número
    check('cargo_empleado')
    .exists()
    .not()
    .isEmpty(),
    check('id_empresa')
    .exists()
    .not()
    .isEmpty(),
    check('id_unida')
    .exists()
    .not()
    .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]


module.exports = { 
    validateCreateAndUpdateEmpleado
}