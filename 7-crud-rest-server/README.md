# REST Server

## Encriptar

1. se instala bcryptjs

   ```
   npm i bcryptjs --save
   ```

2. asi se hace:

   ```JS
   const bcryptjs = require('bcryptjs')

   //encriptar la contrasenia
   const salt = bcryptjs.genSaltSync()
   usuario.password = bcryptjs.hashSync(body.password, salt)
   ```