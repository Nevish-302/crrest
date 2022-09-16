const express = require('express')
const login = require(`./routes/logreg`)
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

app = express()
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());     
app.use(cors())
app.use('/login', login)
const uri = `mongodb://127.0.0.1:27017/test`;
mongoose.connect(uri, {usenewUrlParser: true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log(`MongoDB connected successfully`);
})

app.get('/', (req, res)=>
{
    res.status(200).send(`Home`);
})


app.listen(8080, ()=>{
    console.log(`Server is listening on port 3000`)
})