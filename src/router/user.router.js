const express = require('express')
const userController = require('../controller/user.controller')
const router = express.Router()
router.post('/signUp', userController.signUp)
router.post('/signIn',userController.signIn)
module.exports  = router