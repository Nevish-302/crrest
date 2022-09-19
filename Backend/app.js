const express = require('express')
const login = require(`./routes/logreg`)
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
var session = require('express-session')
const mongodbSession = require('connect-mongodb-session')(session)
app = express()
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());     
app.use(cors())
const uri = `mongodb://127.0.0.1:27017/test`;
mongoose.connect(uri, {usenewUrlParser: true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log(`MongoDB connected successfully`);
})
const store = new mongodbSession(
    {
        uri: uri,
        collection: 'sessions',
    }
)
app.use(session({
    secret: 'cookie',
    resave: false,
    saveUninitialized: false,
    isauth:false,
    store: store
}))

app.get('/', (req, res)=>
{
    res.status(200).send(`Home`);
})
app.use('/login', login)

app.listen(8080, ()=>{
    console.log(`Server is listening on port 3000`)
})