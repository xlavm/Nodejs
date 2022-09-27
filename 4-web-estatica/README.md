# Web Estatica
1. Crea el `proyecto de express` anterior con su app.js y crea un folder que se llame `public`

2. Añade y modifica estas lineas en el `app.js`:

    ```JS
    //sirve contenido de la carpeta public
    app.use( express.static('public') )

    app.get('*', (req, res) => {
        res.sendFile(__dirname + '/public/404.html')
    })
    ```

    NOTA: dentro de `public` se agrega todo el sitio web estatico

---

## Ejecuta el Web Server
Ejecuta en la linea de comandos:

```
npm i

npm start
```