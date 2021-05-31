var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   },
   "tiket4" : {
    "title" : "Add tiket",
    "description" : "Tiket description 1",
    "iduser" : 3,
    "id": 4
     }
}

app.get('/listUsers', function (req, res) {
    fs.readFile( __dirname + "/include/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 app.get('/listTikets', function (req, res) {
    fs.readFile( __dirname + "/include/" + "tikets.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })
 app.post('/addTiket', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/include/" + "tikets.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["tiket4"] = user["tiket4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/include/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})