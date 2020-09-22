const express = require('express');
const nodemon = require ('nodemon');
const app = express();
const bodyParser = require('body-parser');
const Vehiculo = require ('./modelos/vehiculo');
const path = require ('path');
const connectdb = require('./config/database');
const rutasVehiculos = require ('./rutas/vehiculos');

connectdb();
app.use(rutasVehiculos);

/*Motor de plantillas*/
app.set ('view engine', 'ejs');
app.set ('views', __dirname + '/views');

/*PORT*/
const port = process.env.PORT || 3000;

/*---------*/
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));


app.listen (port, () => {
    console.log ("Conectado al SV desde el port" + port);
});


