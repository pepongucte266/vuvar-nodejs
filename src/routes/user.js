const express = require('express')
const router = express.Router()

const userController = require('../app/controllers/UserController')


router.post('/create', userController.create)
router.post('/signin', userController.signin)
router.get('/logout', userController.logout)
module.exports = router