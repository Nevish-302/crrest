const express = require('express')
const login = require(`./routes/logreg`)
const mongoose = require('mongoose')

app = express()
app.use(express.static(`../frontend/`));
app.use(express.urlencoded({extended:false}));
app.use(express.json)
app.use('/login', login)
const uri = `mongodb://127.0.0.1:27017`;
mongoose.connect(uri, {usenewUrlParser: true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log(`MongoDB connected successfully`)
})

app.get('/', (req, res)=>
{
    res.status(200).send(`Home`);
})


app.listen(5000, ()=>{
    console.log(`Server is listening on port 5000`)
})