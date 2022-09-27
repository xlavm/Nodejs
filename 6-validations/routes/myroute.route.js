const { Router } = require('express')
const { check } = require('express-validator')
const { esRolValido, emailExiste } = require('../database/validators.database')
const { validarCampos } = require('../middlewares/validarcampos')
const router = Router()
const mycontroller = require('./../controllers/mycontroller.controller')

//el [check()] es un midleware que se va a ejecutar antes que el controlador
router.post('/agregar-en-bd',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y mas de 6 caracteres').isLength({min:6}),
    check('correo').custom(emailExiste).isEmail(),
    //check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRolValido),
    validarCampos
] ,mycontroller.cargarDataEnBD)

module.exports = router
