const express = require('express')
const {loginpage, login} = require('../controllers/login')
const {registerpage, register} = require('../controllers/register.js')
const router =  express.Router()

router.get('/login/', loginpage);

router.post('/login/', login);

router.get('/register/', registerpage);

router.post('/register/', register);

module.exports = router