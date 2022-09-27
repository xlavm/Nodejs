# Crear Proyecto

---

## Prerequisitos

1. Node js, lo puedes instalar desde: [nodejs.org](https://nodejs.org/)

---

## Inicializa y Crea el Proyecto

1. Primero inicializa el proyecto con el comando

    ```
    npm init
    ```

2. Luego se descargan las dependencias necesarias, en este caso `nodemon` con --save-dev para guardarla en `package.json` en devDependencies
   
    ```
    npm i nodemon --save-dev
    ```

    Modifica el `package.json` para cuando quiera ejecutar la app, use nodemon:

    ```JSON
    "scripts": {
        "start": "nodemon app.js"
    }
    ``` 

3. Crea el codigo del proyecto en el archivo `app.js`

4. Ejecuta la app con el comando:

    ```
    npm start
    ```

**NOTA:** `nodemon` lo que hace es que mantiene la app ejecutandose para que cuando hagamos un cambio, la app lo tome sin necesidad de reiniciar el servidor manualmente.