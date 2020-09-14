const express = require('express');
const nodemon = require ('nodemon');
const app = express();
const mongoose = require ('mongoose');
const mongodb = require ('mongodb');
const path = require ('path');
const bodyParser = require('body-parser');
const publicDirectory = path.join(__dirname, '../public/');
const Vehiculo = require ('../modelos/vehiculo');


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
app.set ('view', __dirname + '/views');

/*PORT*/
const port = process.env.PORT || 3000;
app.use(express.static(publicDirectory));
app.use(express.json());


app.get ('/autos',  async (req, res) => {
    try {
        const arrayVehiculo = await Vehiculo.find ();
        console.log (arrayVehiculo);
        } catch (error) {
            console.log (error);
        }
    res.render ("index",) /*1° el archivo de la carpeta views*/
});
 

app.listen (port, () => {
    console.log ("Conectado al SV desde el port" + port);
});


