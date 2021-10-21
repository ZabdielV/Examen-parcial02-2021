const mongoose=require("mongoose")


mongoose.connect('mongodb://user7:root@54.227.9.233:27017/base07?authSource=admin').then(
()=>{
    console.log("Conexion Exitosa")
}


).catch( err=>{console.log(err)})


//Definir esquema    -> estructura del documento de entrada en la coleccion
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
const Carta =mongoose.model('carta',CartaSchema)


//Agregar un documento (un registro al modelo).
const carta=new Carta({
    numeracion:"2",
    color:"rojas",
    paloCarta:"Picas",
    _id:new mongoose.Types.ObjectId()
})



// CREATE
//Subir dentro del doc.
//Create
carta.save().then(()=>{
    console.log(carta)
    console.log("carta creada")
}).catch(err=>{
    console.log(err)
})


