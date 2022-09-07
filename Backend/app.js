const express = require('express')
login = require('./routes/logreg')
const mongoose = require('mongoose')

app = express()
app.use(express.static(`../frontend/`));

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {usenewUrlParser: true, useCreateIndex : true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log(`MongoDB connected successfully`)
})
app.use('\login', login);



app.listen(5000, ()=>{
    console.log(`Server is listening on port 5000`)
})