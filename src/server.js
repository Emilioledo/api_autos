const express = require('express');
const nodemon = require ('nodemon');
const app = express();
const moongose = require ('mongoose');
const mongodb = require ('mongodb');
const path = require ('path');
const bodyParser = require('body-parser');
const publicDirectory = path.join(__dirname, '../public/');

/*Conectando a la base de datos*/
const MongoClient = require ('mongodb').MongoClient;
const url = "mongodb+srv://uade-clase-36:9nyyH9W87Aezw5qD@cluster0.pv3xb.mongodb.net/"

/*PORT*/
const port = process.env.PORT || 3000;
app.use(express.static(publicDirectory));
app.use(express.json());

app.post ('/', (req, res) => {
    console.log ("Entro la request");
    let marca = req.body.marcaVehiculo;
    let modelo = req.body.modeloVehiculo;
    let color = req.body.colorVehiculo;

    

    /*Creando documento en collection*/
    MongoClient.connect (url, { 
        useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
            if (err) throw err;
            dbo = db.db ("uade-clase-36");
            let vehiculo = {marca_: marca, modelo_: modelo, color_: color};
            dbo.collection("api_autos_emilio").insertOne(vehiculo, (err, res) => {
               if (err) throw err;
               console.log (vehiculo);
               db.close;
            });
        });
    });

app.get ('/', (req, res) => {
    let  resultadoArray = [];
    db.collection ('api_autos_emilio').find();
    cursor.forEach (function (doc, erro){
        resultadoArray.push (doc);
        console.log (resultadoArray);
    }); 
        
});



app.listen (port, () => {
    console.log ("Conectado al SV desde el port" + port);
});


