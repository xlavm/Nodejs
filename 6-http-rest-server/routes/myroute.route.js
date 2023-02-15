const { Router } = require('express')
const router = Router()
const mycontroller = require('../controllers/mycontroller.controller')

router.get('/', mycontroller.metodoGet)
router.post('/', mycontroller.metodoPost)
router.put('/', mycontroller.metodoPut)
router.delete('/:name', mycontroller.metodoDelete)
router.get('/query', mycontroller.metodoQuery)

module.exports = router
