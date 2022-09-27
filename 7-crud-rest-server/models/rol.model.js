const { Schema, model } = require('mongoose')

const RolSchema = Schema({
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
},
    {
        collection: 'rol_collection'
    })

module.exports = model('Rol', RolSchema)