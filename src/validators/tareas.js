const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')

const validateCreateAndUpdate = [
    check('descripcion')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 500}),
    check('inicio')
    .exists()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
        //Validacion Fecha
        const toDate = new Date()
        if(new Date(value).getTime() <= toDate.getTime()){
            throw new Error('La fecha no puede ser menor a la de hoy!');
        }
        return true
    }),
    check('termino')
    .exists()
    .not()
    .isEmpty()
    .custom((value, { req }) => {
        //Validacion Fecha
        const toDate = new Date()
        const toDateInicio = new Date(req.body.inicio)
        if(new Date(value).getTime() <= toDate.getTime() || new Date(value).getTime() <= toDateInicio.getTime()){
            throw new Error('La fecha no puede ser menor a la de hoy y no puede ser menor o igual a la fecha de inicio!');
        }
        return true
    }),
    check('repetible')
    .exists()
    .not()
    .isEmpty(),
    check('activo')
    .exists()
    .not()
    .isEmpty(),
    check('estado')
    .exists()
    .not()
    .isEmpty(),
    check('creador')
    .exists()
    .not()
    .isEmpty(),
    check('nombre')
    .exists()
    .not()
    .isEmpty()
    .isLength({ max: 50 }),
    check('Proceso_idProceso')
    .exists()
    .not()
    .isEmpty(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { 
    validateCreateAndUpdate
}