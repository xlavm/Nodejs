# Proyecto de Express
Express es un framework para crear servidor web con Node

---

## Prerequisitos

1. Node js, lo puedes instalar desde: [nodejs.org](https://nodejs.org/)
2. proyecto Node inicializado (npm init) con nodemon

---

## Instala Dependencias

```
npm install express --save
```

---

## Crea el Web Server
Crea el archivo `app.js` y dentro crea el codigo 

```JS
//web server sencillo
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.listen(3000)
```

---

## Ejecuta el Web Server
Ejecuta en la linea de comandos:

```
npm i

npm start
```

---

## Abre el Web Server en el Navegador
Vas al navegador y ejecutas: http://localhost:3000/