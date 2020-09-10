const MongoClient = require ('mongodb').MongoClient;
const url = "mongodb+srv://uade-clase-36:9nyyH9W87Aezw5qD@cluster0.pv3xb.mongodb.net/"

MongoClient.connect (url, { 
    useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
        if (err) throw err;
        dbo = db.db ("uade-clase-36"); 
       /* dbo.createCollection ("api_autos_emilio", (err, res) => {
            if (err) throw err;
            console.log ("Collection creada");
            db.close();
    }); */ 
});


