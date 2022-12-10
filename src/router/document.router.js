const express = require('express')
const documentController = require('../controller/document.controller')
const {getRole} = require('../middleware/verifyToken')
const router = express.Router()
router.post('/document',getRole, documentController.post_document)
router.get('/document', documentController.get_document)
module.exports  = router