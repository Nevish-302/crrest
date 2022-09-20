const {Schema, model} = require('mongoose') 

const userdata = new Schema(
    {
        data_name: {
            type: String,
            unique : true,            
        }
    }
)

const userData = model('userData', userdata)

module.exports = {userData}