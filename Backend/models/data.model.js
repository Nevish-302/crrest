const {Schema, model} = require('mongoose')

const Data = new Schema(
    {
        data_name : {type: String},
        req_name : {
            type: String, 
            required: true,
        }, 
        title :{
            job :  {
            type: String,
        },
        titular_about : {
            type: String,
        }}, 
        contact : {
            number : {type : Number},
            email : {type : String},
            address : {type: String},
            website : {type : String}
        },
        skills : {
            type : Array,
        },
        hobbies : {
            type : Array,
        },
        about : {type : String},
        education : {
            type: Array,
            members : [{year : {type : String},},
            {degree : {type : String},},
            {college : {type : String}}]
        }   
        ,
        workExp : {
            type: Array,
            members :[{year : {type : Number},},
            {post : {type : String},},
            {company : {type : String}}]
        },
    }
)
const data = model('data', Data)
module.exports = {data}