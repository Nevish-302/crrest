const express = require('express')
const {loginpage, login, logout} = require('../controllers/login')
const {registerpage, register} = require('../controllers/register.js')
const router =  express.Router()

router.get('/login/', loginpage);

router.post('/login/', login);

router.post('/logout/', logout);

router.get('/register/', registerpage);

router.post('/register/', register);

module.exports = router