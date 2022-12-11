const express = require('express')
const learnController = require('../controller/learn.controller')
const upload = require('../helper/upload')
const {getRole} = require('../middleware/verifyToken')
const router = express.Router()
router.post('/video',upload.single('video'),learnController.post_video)
router.get('/video', learnController.get_video)

module.exports  = router