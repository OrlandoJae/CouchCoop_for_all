var express = require("express");
const router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "what2eat"
});

var gerichttitel;
var idgericht;
var idzutaten;
var bezeichnung;
var menge;
var mengenangabe;

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM gericht", function (err, result, fields) {
      if (err) throw err;
       gerichttitel = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          gerichttitel[i] = result[i].titel;
          console.log("Gericht" + i + ": " + gerichttitel[i]);
        };
    });
    con.query("SELECT * FROM zutat", function (err, result, fields) {
      if (err) throw err;
       bezeichnung = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          bezeichnung[i] = result[i].bezeichnung;
          console.log("Zutatbezeichnng" + i +": " + bezeichnung[i])
        };
    });
    con.query("SELECT * FROM rezept", function (err, result, fields) {
      if (err) throw err;
       idgericht = new Array(result.length);
       idzutat = new Array(result.length);
       menge = new Array(result.length);
       mengenangabe = new Array(result.length);
       console.log("Rezept:idgericht,idzutat,menge,mengenangabe");
        for (var i = 0; i < result.length; i++) {
          idgericht[i] = result[i].idgericht;
          idzutat[i] = result[i].idzutat;
          menge[i] = result[i].menge;
          mengenangabe[i] = result[i].mengenangabe;
          console.log("Rezept:" + idgericht[i] + "," + idzutat[i] + "," + menge[i] + "," + mengenangabe[i]);
        };
    });
  });

  router.get('/regis', (req, res) => {
      console.log('Request for regis page recieved');
      res.render('regis', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe});
  })


  router.get('/shuffle', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('shuffle', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe});
    })

  router.get('/login', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('login', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe});
  })

  module.exports = router;