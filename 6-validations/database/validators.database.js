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