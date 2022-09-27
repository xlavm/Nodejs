const express = require('express')
const app = express()

//sirve contenido de la carpeta public
app.use( express.static('public') )

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(3000)