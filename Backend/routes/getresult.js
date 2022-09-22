const {create} = require('../controllers/create')
const express = require('express')
const router = express.Router()

router.post('/create', create)


module.exports = router