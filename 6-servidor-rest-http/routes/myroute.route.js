const { Router } = require('express')
const router = Router()
const mycontroller = require('../controllers/mycontroller.controller')

router.get('/', mycontroller.obtenerData)
router.post('/', mycontroller.cargarData)
router.get('/query', mycontroller.mostrarQuery)

module.exports = router
