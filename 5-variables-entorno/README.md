# Variables de Entorno

## Instala Dependencias

```JS
npm i dotenv --save
```

## Crea y usa el .env

1. en la raiz de la app se crea un archivo llamado: `.env` que contenga:

    ```
    PORT=8080
    ```

2. en el app.js o server.js se cargan las variables de entorno haciendo un require asi:

    ```JS
    require('dotenv').config()
    ```

3. para usar la variable PORT anterior, se hace asi:

    ```JS
    const port = process.env.PORT
    ```