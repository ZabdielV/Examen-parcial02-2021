const mongoose=require("mongoose")

//Definir esquema    
const CartaSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    numeracion:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    paloCarta:{
        type:String,
        required:true
    }
},{collection:'cartas_zabdiel'})
//Crear el modelo a partir del esquema definido. Se crea una coleccion 
module.exports =mongoose.model('carta',CartaSchema)