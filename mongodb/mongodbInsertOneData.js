var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.122:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { _id: 1, product_id: 154, status: 1 };
  dbo.collection("orders").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
