const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const User = require('../models/user.model')

const register = async (req, res) => {
    const {username, password} = await req.body;
    const saltrounds = 10
    bcrypt.hash(password, saltrounds, (err, hash)=>{
        const user = new User({Username: username, passHash: hash});
        user.save()
        .then(item => {
          res.send(`${item} has registered successfully`);

        })
        .catch(err => {
          res.status(400).send("unable to register", err);
          res.redirect('/login/register')
        });
    })
        
    
}
const registerpage = (req, res) => {
    res.status(200).send('Home');
}
module.exports = {register, registerpage}