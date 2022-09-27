const Usuario = require('../models/usuario.model')
const bcryptjs = require('bcryptjs')

/**
 * para usar este metodo se tiene que poner en el body - raw:
 * {"nombre": "luis","correo": "luis@luisvanegas.com","password": "12345","rol": "USER_ROLE"}
 * POST http://localhost:3000/myapi/
 */
const agregar = async (req, res) => {
    const body = req.body
    const usuario = new Usuario(body)

    //encriptar la contrasenia
    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(body.password, salt)

    //guardar en base de datos
    await usuario.save()

    res.status(200).json({
        msg: 'esta es la respuesta POST de la API',
        usuario
    })
}

/**
 * para usar este metodo se tiene que poner en el body - raw:
 * {"nombre": "luis","correo": "luis@luisvanegas.com","password": "12345","rol": "USER_ROLE"}
 * PUT http://localhost:3000/myapi/632cd708f2ee5d912f576469
 */
const actualizar = async (req, res) => {
    const { id } = req.params
    //excluyo _id, password, google y correo
    const { _id, password, google, correo, ...resto } = req.body

    //TODO validar contra base de datos
    if (password) {
        //encriptar la contrasenia
        const salt = bcryptjs.genSaltSync()
        resto.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto)

    res.status(200).json({
        msg: 'esta es la respuesta PUT de la API',
        usuario
    })
}

/**
 * para usar este metodo se hace con:
 * GET http://localhost:3000/myapi/?desde=5&limite=1
 */
const listarPaginando = async (req, res) => {
    const { limite, desde } = req.query

    const [totalRegistros, usuarios] = await Promise.all([
        Usuario.countDocuments(),
        Usuario.find()
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.status(200).json({
        msg: 'esta es la respuesta GET de la API',
        totalRegistros,
        usuarios
    })
}

/**
 * para usar este metodo se hace con:
 * DELETE http://localhost:3000/myapi/632cd708f2ee5d912f576469
 */
const eliminar = async (req, res) => {
    const { id } = req.params

    const usuario = await Usuario.findByIdAndDelete(id)

    res.status(200).json({
        msg: 'esta es la respuesta DELETE de la API',
        usuario
    })
}

module.exports = {
    agregar,
    actualizar,
    listarPaginando,
    eliminar
}
