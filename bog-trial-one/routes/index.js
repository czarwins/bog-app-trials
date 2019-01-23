const express = require('express')
const router = express.Router()

const creatureController = require('../controllers/creatureController')

router.get('/', creatureController.index)
router.post('/creatures', creatureController.create)
router.get('/creatures/:creatureId', creatureController.show)
router.delete('/creatures/:creatureId', creatureController.delete)
router.put('/creatures/:creatureId', creatureController.update)


module.exports = router

