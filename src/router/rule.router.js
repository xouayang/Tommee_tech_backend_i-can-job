const express = require('express')
const ruleController = require('../controller/rule.controller')
const {getRole} = require('../middleware/verifyToken')
const router = express.Router()
router.post('/rule',ruleController.post_rule)
router.get('/rule', ruleController.get_rule)

module.exports = router
