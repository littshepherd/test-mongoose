const mongoose = require('mongoose');
const {Schema} = mongoose;

const violenciaIntrafamiliar = new  Schema({
    
    'ARMAS MEDIOS': String,
    CANTIDAD: Number,
    "CODIGO DANE": BigInt,
    DEPARTAMENTO: String,
    "FECHA HECHO": Date,
    GENERO: String,
    "GRUPO ETARIO": String,
    MUNICIPIO: String,

});
module.exports ={ violenciaIntrafamiliar};