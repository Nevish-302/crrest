const mongoose = require(`./mongoose`)
const schema = mongoose.schema();

const userinfo = new schema ({
    username : {
        type: string, 
        required: true,
        unique: true,
        trim: true,
        minlength:3,
    },
    passHash : {
        type: string, 
        required: true, 
    }
});

const User = mongoose.model('User', userinfo);

module.exports = user;