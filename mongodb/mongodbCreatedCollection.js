var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.1.122:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("products", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});