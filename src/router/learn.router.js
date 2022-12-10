const express = require('express')
const learnController = require('../controller/learn.controller')
const {verifyToken,getRole} = require('../middleware/verifyToken')
const router = express.Router()
router.post('/video',getRole,learnController.post_video)
router.get('/video', learnController.get_video)
module.exports  = router