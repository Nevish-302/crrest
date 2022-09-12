const express = require('express')

const login = (req, res) => {
    res.status(200).send('Login');
}

const loginpage = (req, res) => {
    res.status(200).send('Home');
}
module.exports = {login, loginpage}