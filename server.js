const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => {
    console.log('We are live on ' + port);
  });  

const client = new MongoClient(db.url,{useUnifiedTopology: true})
client.connect().then(database=>require('./app/routes')(app, database) ,console.log)





 
       
 
