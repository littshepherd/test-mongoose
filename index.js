let express = require('express');
let app  = express();
const mongoose = require('mongoose');
const {violenciaIntrafamiliar} = require('./models/Violence.model')

async function main(){
    await mongoose.connect("mongodb://localhost:27017/test_open_data")
    const model = mongoose.model('violencia_intrafamiliar', violenciaIntrafamiliar);
    const response = await model.find()

return response
} 


app.get('/', async function(req, res) {
    try{
        const response = await main()
        res.status(200).json(response)
       console.log("hola", model )    // res.status(200).send(response)
    }catch(e){
console.log(e)
    }

})


app.listen(3000);