# REST Server

## Validar Campos Obligatorios

1.  se instala el express-validator

    ```
    npm i express-validator --save
    ```

2. se crea una carpeta Middlewares y dentro el archivo: `validarcampos.js` que contenga:

    ```JS
    const { validationResult } = require("express-validator")

    const validarCampos = (req, res, next) => {

        //valido los errores obtenidos por el check del middleware
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json(errors)
        }

        //si no hay error, sigue con lo siguiente que seria el controlador
        next()

    }

    module.exports = {
        validarCampos
    }
    ```

3. para validar contra la base de datos, se crea el archivo `validators.database.js` que contenga:

    ```JS
    const rolModel = require('../models/rol.model')
    const usuarioModel = require('../models/usuario.model')

    const esRolValido = async (rol = '') => {
        const existeRol = await rolModel.findOne({ rol })
        if (!existeRol) { throw new Error(`El rol ${rol} no esta registrado en la BD`) }
    }

    const emailExiste = async (correo = '') => {
        const existeEmail = await usuarioModel.findOne({ correo })
        if (existeEmail) throw new Error(`El correo ${correo} ya existe`)
    }

    module.exports = {
        esRolValido,
        emailExiste
    }
    ```

4. en el `route` se hace la validacion asi:

    ```JS
    const { check } = require('express-validator')

    //el [check()] es un midleware que se va a ejecutar antes que el controlador
    router.post('/agregar-encriptada-en-bd',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio y mas de 6 caracteres').isLength({min:6}),
    check('correo').custom(emailExiste).isEmail(),
    //check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom(esRolValido),
    validarCampos
    ] ,mycontroller.cargarDataEncriptadaEnBD)
    ```

## Executing 

1. ejecuta los comandos:

    ```
    npm i
    node app
    ```