const express = require('express');
const nodemailer = require ('nodemailer');
const app = express();

/*PORT*/
const port = process.env.PORT || 3000;



app.listen (port, () => {
    console.log ("Conectado al SV desde el port" + port);
});





