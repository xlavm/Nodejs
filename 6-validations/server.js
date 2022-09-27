const express = require('express')
const cors = require('cors')
const {dbConnection} = require('./database/config.database')

class Server {

    constructor() {
        this.app = express()
        this.API_PORT = process.env.API_PORT
        this.API_PATH = process.env.API_PATH
        //Conectar a Base de datos
        this.conectarDB()
        //Middlewares
        this.middlewares()
        //Routes
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    /**
     * todo lo que usemos como this.app.use es un middleware
     */
    middlewares() {
        //CORS
        this.app.use(cors())
        //Lectura y parseo del body del request
        this.app.use(express.json())
    }

    /**
     * las routes son middlewares
     */
    routes() {
        this.app.use(this.API_PATH, require('./routes/myroute.route'))
    }

    /**
     * Configuracion del puerto donde escuchara el servidor
     */
    listen() {
        this.app.listen(this.API_PORT, () => {
            console.log('Servidor corriendo en puerto:', this.API_PORT)
        })
    }

}

module.exports = Server
