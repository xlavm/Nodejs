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