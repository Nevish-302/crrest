const express = require('express')
const {form_fill, form_submit} = require('../controllers/form.js')
const router = express.Router()

router.get('/fill', form_fill);

router.post('/submit', form_submit)

module.exports = router