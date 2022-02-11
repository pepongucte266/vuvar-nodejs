const express = require('express')
const router = express.Router()

const carController = require('../app/controllers/CarController')

router.get('/shop/verhicle/:id', carController.show)
router.post('/sell-your-car/your-verhicle', carController.checkvalid)
router.get('/sell-your-car', carController.valid)
router.get('/shop/interior/:id', carController.showinterior)
router.get('/shop', carController.index)
router.get('/', carController.valid)

module.exports = router