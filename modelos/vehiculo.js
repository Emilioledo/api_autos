const mongoose = require ('mongoose');
const Schema = mongoose.Schema;


/*Esquema*/
const vehiculoEsquema = new Schema ({
    marca: String, 
    modelo: String, 
    color: String
});

/*Modelo*/

const Vehiculo = mongoose.model ('Vehiculo', vehiculoEsquema);

module.exports = Vehiculo; /*Exportar modelo*/