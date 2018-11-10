var express = require("express");
var path = require("path");
var app = express();


// Set the default views directory to html folder
app.set('views', path.join(__dirname, 'html'));

// Set the folder for css & java scripts & img
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Set the view engine to ejs
app.set('view engine', 'ejs');


app.listen(3000, () => {
    console.log("Server is running at localhost:3000");
});

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: '',
  database: "what2eat",
});

var gerichttitel;
var idgericht;
var idzutaten;
var bezeichnung;
var menge;
var mengenangabe;
var gewohnheitsbezeichnung;
var idessensgewohnheiten;
var unvertraeglichkeitenbezeichnung;
var idunvertraeglichkeiten;

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

    con.query("SELECT * FROM essensgewohnheiten", function (err, result, fields) {
      if (err) throw err;
       idessensgewohnheiten = new Array(result.length);
       gewohnheitsbezeichnung = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          gewohnheitsbezeichnung[i] = result[i].gewohnheitsbezeichnung;
          idessensgewohnheiten[i] = result[i].idessensgewohnheiten;
          console.log("Essensgewohnheiten:" + idessensgewohnheiten[i] );
        };
    });

    con.query("SELECT * FROM unvertraeglichkeiten", function (err, result, fields) {
      if (err) throw err;
       idunvertraeglichkeiten = new Array(result.length);
       unvertraeglichkeitenbezeichnung = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          idunvertraeglichkeiten[i] = result[i].idunvertraeglichkeiten;
          unvertraeglichkeitenbezeichnung[i] = result[i].unvertraeglichkeitenbezeichnung;
          console.log("Unverträglichkeiten:" + idunvertraeglichkeiten[i] + "Bezeichnung:" + unvertraeglichkeitenbezeichnung[i]);
        };
    });

  });

  app.get('/regis', (req, res) => {
      console.log('Request for regis page recieved');
      res.render('regis', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe,gewohnheitsbezeichnung});
  })


  app.get('/shuffle', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('shuffle', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe,gewohnheitsbezeichnung});
    })

  app.get('/login', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('login', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe,gewohnheitsbezeichnung});
  })


  app.get('/', (req, res) => {
      console.log('Request for home recieved');
      res.render('index');
  })


  app.get('/nogos', (req, res) => {
      console.log('Request for nogos page recieved');
      res.render('nogos', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe, idessensgewohnheiten, gewohnheitsbezeichnung, idunvertraeglichkeiten, unvertraeglichkeitenbezeichnung});
  })
