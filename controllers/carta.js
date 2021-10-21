const Carta = require("../models/carta")
const mongoose=require("mongoose")

//Se valida por medio de javascript si la numeración, el color y el palo de la carta son correctos
exports.postAgregarCarta = async (req,res)=>{
    
    if( (req.body.numeracion==="A" || req.body.numeracion==="2" || req.body.numeracion==="3"
     || req.body.numeracion==="4" || req.body.numeracion==="5" || req.body.numeracion==="6"||req.body.numeracion==="7" || req.body.numeracion==="8" 
    || req.body.numeracion==="9" || req.body.numeracion==="10" ||req.body.numeracion==="J" || req.body.numeracion==="Q" || req.body.numeracion==="K") &&
    (req.body.color==="rojo" ||req.body.color==="negro")&&
    (req.body.paloCarta==="picas" ||req.body.paloCarta==="corazones" ||req.body.paloCarta==="rombos" ||req.body.paloCarta==="treboles" ) ){

        /* */
        console.log(req.body)
    const carta=new Carta(
{
    numeracion:req.body.numeracion,
    color: req.body.color,
    paloCarta:req.body.paloCarta,
    _id:new mongoose.Types.ObjectId()
}
        )
    try{
        await carta.save()
         console.log(carta)
        console.log("carta registrada exitosamente")
        res.json(
            {
                estatus:"carta registrada exitosamente"
            }
        )
        }
        catch(err){
        console.log(err)
        }
        
      
    }else{
        res.json({
            estatus:"respuesta invalida"
        })
    }

}

exports.getMostrarCartas = async (req,res)=>{
     const respuesta=await Carta.find()
     res.json(respuesta)
}


