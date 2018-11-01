var express = require("express");
const router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "what2eat"
});

var shufflegericht;

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM gericht", function (err, result, fields) {
      if (err) throw err;
       shufflegericht = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          shufflegericht[i] = result[i].titel;
          console.log( shufflegericht[i]);
        };
    });
  });

  router.get('/regis', (req, res) => {
      console.log('Request for regis page recieved');
      res.render('regis', {shufflegericht});
  })


  router.get('/shuffle', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('shuffle', {shufflegericht});
    })

  router.get('/login', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('login', {shufflegericht});
  })

  module.exports = router;
