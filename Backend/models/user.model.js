const mongoose = require(`mongoose`)
const {Schema}  = mongoose;

const userinfo = new Schema ({
    Username : {
        type: String, 
        required: true,
        unique: true,
        trim: true,         
        minlength:3,
    },
    passHash : {
        type: String, 
        required: true, 
    }
});

const User = mongoose.model('User', userinfo);

module.exports = User;