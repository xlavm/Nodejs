const mongoose = require('mongoose')

const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.DB_CONECCTION_CHAIN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log('Base de Datos Conectada')

    } catch (error) {
        console.log(error)
        throw new Error('Error al conectar con la base de datos')
    }

}

module.exports = {
    dbConnection
}