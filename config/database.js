const mongoose = require ('mongoose');

/*Conectando a la base de datos*/
// const user = 'api_vehiculo';
// const password = 'a7ylI6b9eG5s5Iv8';
const url = "mongodb+srv://api_vehiculo:a7ylI6b9eG5s5Iv8@cluster0.9lddv.mongodb.net/Test?retryWrites=true&w=majority";

const connected = ()=>{
    mongoose.connect(url, 
        {useNewUrlParser: true, useUnifiedTopology: true}).then (()=> {
            console.log ("Base de datos conectada");
        }).catch ( (error) => {
            console.log (error);
        });
    }
    
module.exports=connected;