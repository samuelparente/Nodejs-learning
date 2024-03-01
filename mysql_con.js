//Samuel Parente
//NODE JS

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  //create database
  con.query("CREATE DATABASE IF NOT EXISTS node_db_test", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
  
  //Select database
  con.query("USE node_db_test");
  //create table
  var sql = "CREATE TABLE IF NOT EXISTS customers (d INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  
  //Insert record
  sql = "INSERT INTO customers (name, email) VALUES ('Company Inc', 'my@email,com')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  
});