/**
 * para usar este metodo se hace con:
 * GET http://localhost:3000/myapi/
 */
const obtenerData = (req, res) => {
    res.status(200).send(`Hola Mundo`)
}

/**
 * para usar este metodo se tiene que poner en el body - raw:
 * {"name": "luis"} 
 * POST http://localhost:3000/myapi/
 */
const cargarData = (req, res) => {
    const body = req.body
    res.status(200).json(`Hola Mundo dice: ${ body.name }`)
}

/**
 * para usar este metodo se hace con:
 * GET http://localhost:3000/myapi/query?nombre=luis&apellido=vanegas
 */
const mostrarQuery = (req, res) => {
    const query = req.query
    res.status(200).json({
        query
    })
}

module.exports = {
    obtenerData,
    cargarData,
    mostrarQuery
}
