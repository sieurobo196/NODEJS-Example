//var mysql = require('mysql');
//
//var con = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password: "",
//  database: "mydb"
//});
//
//con.connect(function(err) {
//  if (err) throw err;
//  console.log("Connected!");
//  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//  con.query(sql, function (err, result) {
//    if (err) throw err;
//    console.log("Table created");
//  });
//});


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a table where the field "id" is primary key:*/
  var sql = "CREATE TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});





