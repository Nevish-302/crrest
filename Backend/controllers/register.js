const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/user.model')

const register = (req, res) => {
    const {username, password} = req.body;
    const saltrounds = 10
    bcrypt.hash(password, saltrounds, (err, hash)=>{
        console.log(`Hello Sir ${username, password}`)
        console.log(hash);
        const user = new User({Username: username, passHash: hash});
        console.log(hash, username)
        user.save()
        .then(item => {
          res.send("item saved to database");
        })
        .catch(err => {
          res.status(400).send("unable to save to database");
        });
    })
        
    
}
const registerpage = (req, res) => {
    res.status(200).send('Home');
}
module.exports = {register, registerpage}