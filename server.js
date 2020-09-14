const express = require('express');
const nodemon = require ('nodemon');
const app = express();
const mongoose = require ('mongoose');
const mongodb = require ('mongodb');
const bodyParser = require('body-parser');
const Vehiculo = require ('./modelos/vehiculo');
const path = require ('path');


/*Conectando a la base de datos*/
// const user = 'api_vehiculo';
// const password = 'a7ylI6b9eG5s5Iv8';
const url = "mongodb+srv://api_vehiculo:a7ylI6b9eG5s5Iv8@cluster0.9lddv.mongodb.net/Test?retryWrites=true&w=majority";

mongoose.connect(url, 
{useNewUrlParser: true, useUnifiedTopology: true}).then (()=> {
    console.log ("Base de datos conectada");
}).catch ( (error) => {
    console.log (error);
});



/*Motor de plantillas*/
app.set ('view engine', 'ejs');
app.set ('views', __dirname + '/views');

/*PORT*/
const port = process.env.PORT || 3000;

/*---------*/
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

/*RUTAS*/

app.get ('/', (req, res) =>{
    res.render ("index"); /*1° parametro archivo que quiere renderizar*/
});


app.get ('/autos',  async (req, res) => {
    try {
        const arrayVehiculo = await Vehiculo.find ();
        res.render ("user/autos", {
            arrayVehiculo : arrayVehiculo
        });
        } catch (error) {
            console.log (error);
        }
});

 app.post ('/altas', async (req, res) =>{
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


app.listen (port, () => {
    console.log ("Conectado al SV desde el port" + port);
});


