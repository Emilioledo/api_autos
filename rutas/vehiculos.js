const express = require ('express');
const Vehiculo = require ('../modelos/vehiculo');
const router = express.Router();

router.get ('/', (req, res) =>{
    res.render ("index"); /*1° parametro archivo que quiere renderizar*/
});

router.get ('/autos',  async (req, res) => {
    try {
        const arrayVehiculo = await Vehiculo.find ();
        res.render ("user/autos", {
            arrayVehiculo : arrayVehiculo
        });
        } catch (error) {
            console.log (error);
        }
});

router.post ('/altas', async (req, res) =>{
      let marca_ = req.body.marcaVehiculo;
      let modelo_ = req.body.modeloVehiculo;
      let color_ = req.body.colorVehiculo;
      let vehiculo_ = {
            marca: marca_,
            modelo: modelo_,
            color: color_
      };
      console.log (vehiculo_);
      try {
        await Vehiculo.create (vehiculo_);
      } catch (error){
        console.log (error);
      }
 });

 module.exports = router;