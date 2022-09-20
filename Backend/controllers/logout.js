const express = require('express')

const logout = (req, res) => {
    
    req.session.isauth = false
    req.session.user = null
    console.log(req.session)            
    res.status(200).send('Home');
}

module.exports = {logout}