
module.exports = function(app, db) {

    app.get('/phones/', (req, res) => {

        db.db().collection('phones').find(req.query).toArray().then((phone) => {
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.send(phone)
        },(err)=> {
          res.send({'error':'An error has occurred'});
          console.log(err)
        })

    });

    app.post('/phones', (req, res) => {
        const phone = { 
          id: req.body.id, 
          name: req.body.name,
          cpu: req.body.cpu,
          memory: req.body.memory,
          ram: req.body.ram,
          screen: req.body.screen,
          battery: req.body.battery,
          camera: req.body.camera
         };

        db.db().collection('phones').insertOne(phone).then((result)=>{
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.send(result.ops[0]);
        },(err)=>{
          res.send({ 'error': 'An error has occurred' }); 
          console.log(err)
        })

    });
  };

