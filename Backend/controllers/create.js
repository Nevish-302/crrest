const data = reqire('../models/data.model.js')
const {PythonShell} = require('python-shell')
const create = (req, res) =>
{
    const {_data_name, i} = req.body
    data.findOne({data_name : _data_name}).then(template_data => 
        {
            const options = {
            mode : 'text',
            pythonOptions : ['-u'],
            scriptPath : `../templates`,
            args : [template_data], 
        }
        PythonShell.run(`/template_${i}.py`, options, (err, result) => {
            if(err) throw err;
            console.log(result);
        })
    })
}