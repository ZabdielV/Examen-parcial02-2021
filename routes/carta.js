const router=require("express").Router();

const cartaController = require("../controllers/carta")


router.post('/agregarCarta',cartaController.postAgregarCarta)


router.get('/mostrarCartas',cartaController.getMostrarCartas)
//READ post


module.exports=router   