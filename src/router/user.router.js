const express = require('express')
const userController = require('../controller/user.controller')
const router = express.Router()
router.post('/signUp', userController.signUp)
router.post('/signIn',userController.signIn)
router.get('/getUser', userController.getUsers)
module.exports  = router