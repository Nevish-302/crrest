const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/user.model')

const register_p = async (req, res) => {
    const {username, password} = await req.body;
    const saltrounds = 10
    bcrypt.hash(password, saltrounds, (err, hash)=>{
        const user = new User({Username: username, passHash: hash});
        user.save()
        .then(item => {
          console.log(`${item} has registered successfully`);
          res.redirect('http://localhost:3000/');
        })
        .catch(err => {
          console.log("unable to register", err);
        });
    })
        
    
}
const register_g = (req, res) => {
    res.status(200).send('Home');
}
module.exports = {register_p, register_g}