const {userData} = require('../models/userdata.model')
const {data} = require('../models/data.model')

const form_fill = (req, res)=>{
    console.log(`Working`);
}

const form_submit = async (req, res) => {
    const {
        _data_name,
        _req_name,
        _titular_about,
        _contact_number,
        _contact_email,
        _contact_address,
        _contact_website,
        _skills,
        _hobbies,
        _about,
        _Education,
        _workExp
    } = await req.body
    const data_ = new data({
        data_name : _data_name,
        req_name : _req_name,
        titular_about : _titular_about,
        about : _about,
        education : _Education,
        workExp : _workExp
    })
    const userData_ = new userData({
        data_name : _data_name,
    })
    userData_
    .save().then((item) => {
         console.log(`Data information has been saved successfully`)
    }).catch(err => {
         console.log(`unable to save the data info`, err);
        
    })

    data_.save().then((item) => {
        console.log("Hello");
        console.log(`Data has been saved successfully`)
    }).catch(err => {
       console.log(`unable to save the data`);
        
    })
}

module.exports = {form_fill, form_submit}