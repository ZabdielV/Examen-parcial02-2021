const express=require("express")
const mongoose=require("mongoose")

//Traer los modulos
const cartasRoutes=require("./routes/carta")

const app=express()

//Agregar middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Agregar la ruta principal
app.use("/cartas",cartasRoutes)


mongoose.connect('mongodb://user7:root@54.227.9.233:27017/base07?authSource=admin').then(
()=>{
    //console.log("Conexion Exitosa")
    app.listen(8080,()=>{
        console.log("Servidor en linea")
    })
}


).catch( err=>{console.log(err)})