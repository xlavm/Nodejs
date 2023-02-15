const metodoGet = (req, res) => {
    res.status(200).send(`Hola Mundo desde metodo GET`)
}

const metodoPost = (req, res) => {
    const body = req.body
    res.status(200).json(`Hola Mundo dice: ${body.name} desde el metodo POST`)
}

const metodoPut = (req, res) => {
    const body = req.body
    res.status(200).json(`Hola Mundo dice: ${body.name} desde el metodo PUT`)
}

const metodoDelete = (req, res) => {
    const nameParam = req.params.name
    res.status(200).json(`Hola Mundo dice: ${nameParam}`)
}

const metodoQuery = (req, res) => {
    const query = req.query
    res.status(200).json({
        query
    })
}

module.exports = {
    metodoGet,
    metodoPost,
    metodoPut,
    metodoDelete,
    metodoQuery
}
