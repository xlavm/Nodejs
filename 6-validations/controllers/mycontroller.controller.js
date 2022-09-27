const Usuario = require('../models/usuario.model')

/**
 * para usar este metodo se tiene que poner en el body - raw:
 * {"nombre": "luis","correo": "luis@luisvanegas.com","password": "12345","rol": "USER_ROLE"}
 * POST http://localhost:3000/myapi/agregar-en-bd
 */
 const cargarDataEnBD = async (req, res) => {
    const body = req.body
    const usuario = new Usuario( body )

    //guardar en base de datos
    await usuario.save()
    
    res.status(200).json({
        msg: 'esta es la respuesta de la API',
        usuario
    })
}

module.exports = {
    cargarDataEnBD
}
