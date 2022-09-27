# Bases
- Requerir paquetes
- Importar archivo de proyecto `(multiplicar.js)`
- Exportar data en archivo

---

## Prerequisitos

1. Node js, lo puedes instalar desde: [nodejs.org](https://nodejs.org/)

---

## Ejecucion
ejecuta el comando:

```
node app
```

**NOTA:** En la carpeta [1-basics](./1-basics/) se encuentra el codigo fuente de ejemplo, para ejecutarlo debes abrir tu command line en el path `1-basics/` y dentro ejecutar el comando: `node app` 

---

## Requerir paquetes
voy a usar el paquete `fs` de Node, mas informacion aqui: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#file-system

- instruccion: 
    ```JS
    const fs = require('fs')
    ```

---

## Importar archivo de proyecto `(multiplicar.js)`
Voy a importar las funciones qe tenga `multiplicar.js` dentro de `app.js` para ser usada en app.js

- archivo `multiplicar.js`

    ```JS
    const crearArchivo = async(base = 5) => {

    }

    //Se debe usar la clase module y dentro listar las funciones que quiero exportar
    module.exports = {
        crearArchivo
    }
    ```

- archivo `app.js`

    ```JS
    //se hacer un require del archivo a importar, destructurando las funciones a usar
    const { crearArchivo } = require('./multiplicar')

    //se llama la funcion y se hace uso de ella
    crearArchivo(base)
        .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
        .catch (err => console.log(err))
    ```

---

## Exportar data en archivo
usas el `File Systems` para exportar data en un archivo cualquiera, asi se veria el codigo:

```JS
//se importa el paquete 
const fs = require('fs')

//se crea la data
const data = 'Esta es la data del archivo a exportar'

//se exporta el archivo
fs.writeFileSync( `archivo.txt`, data )
```
