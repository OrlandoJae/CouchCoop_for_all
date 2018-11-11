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
var zutatennogos;
var gewohnheitennogos;
var unvertraeglichkeitennogos;

class Gericht {

  /*var unvertraeglichkeiten = new Array();
  var essgewohnheiten = new Array();
  var zutaten = new Array();
  var zubereitung;
  var anzahlPersonen;
  var nummer;
  var bezeichnung;*/

  constructor (id, name, anzahlPersonen) {
    this.nummer = id;
    this.bezeichnung = name;
    this.anzahlPersonen = anzahlPersonen;
  }

  addUnvertraeglichkeit(bezeichnung) {
    this.unvertraeglichkeiten = new Array();
    this.unvertraeglichkeiten.push(bezeichnung);
  }

  addEssgewohnheit(bezeichnung) {
    this.essgewohnheiten = new Array();
    this.essgewohnheiten.push(bezeichnung);
  }

  addZutat(zutat) {
    this.zutaten = new Array();
    this.zutaten.push(zutat);
  }

}

class Zutat {/*
  var nummer;
  var bezeichnung;
  var menge;
  var mengenangabe;*/

  constructor (id, bezeichnung) {
    this.nummer = id;
    this.bezeichnung = bezeichnung;
  }
}

class Zutathinzu {
  constructor (id, bezeichnung, menge, mengenangabe) {
    this.id = id;
    this.bezeichnung = bezeichnung;
    this.menge = menge;
    this.mengenangabe = mengenangabe;
  }
}

class Essgewohnheit {/*
  var id;
  var name;*/

  constructor (id, name) {
    this.id = id;
    this.name = name;
  }
}

class Unvertraeglichkeit {/*
  var id;
  var name;*/

  constructor (id, name) {
    this.id = id;
    this.name = name;
  }
}

var gerichte;
var zutatenliste;
var essgewohnheitenliste;
var unvertraeglichkeitenliste;

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM gericht", function (err, result, fields) {
      if (err) throw err;
        gerichte = new Array(result.length);
        gerichttitel = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          gerichttitel[i] = result[i].titel;
          gerichte[i] = new Gericht(result[i].idgericht, result[i].titel, result[i].person);
          console.log("Gericht" + i + ": " + gerichttitel[i]);
        };
        console.log(gerichte[0]);
    });
    console.log(gerichte[0]);

    con.query("SELECT * FROM zutat", function (err, result, fields) {
      if (err) throw err;
       bezeichnung = new Array(result.length);
       zutatenliste = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          bezeichnung[i] = result[i].bezeichnung;
          zutatenliste[i] = new Zutat(result[i].id, result[i].bezeichnung);
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
          for (var k = 0; k < gerichte.length; k++) {
            if (gerichte[k].id = i) {
              gerichte[k].addZutat(new Zutathinzu(result[i].idzutat, zutatenliste[result[i].idzutat].bezeichnung, result[i].menge, result[i].mengenangabe));
            }
          }
          idgericht[i] = result[i].idgericht;
          idzutat[i] = result[i].idzutat;
          menge[i] = result[i].menge;
          mengenangabe[i] = result[i].mengenangabe;
          console.log("Rezept:" + idgericht[i] + "," + idzutat[i] + "," + menge[i] + "," + mengenangabe[i]);
        };
        zutatennogos = new Array(idzutat.length-1);
    });

    con.query("SELECT * FROM essensgewohnheiten", function (err, result, fields) {
      if (err) throw err;
        essgewohnheitenliste = new Array(result.length)
        idessensgewohnheiten = new Array(result.length);
        gewohnheitsbezeichnung = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          essgewohnheitenliste[i] = new Essgewohnheit(result[i].essensgewohnheiten, result[i].gewohnheitsbezeichnung);
          gewohnheitsbezeichnung[i] = result[i].gewohnheitsbezeichnung;
          idessensgewohnheiten[i] = result[i].idessensgewohnheiten;
          console.log("Essensgewohnheiten:" + idessensgewohnheiten[i] );
        };
        gewohnheitennogos = new Array (idessensgewohnheiten.length);
    });

    con.query("SELECT * FROM unvertraeglichkeiten", function (err, result, fields) {
      if (err) throw err;
        unvertraeglichkeitenliste = new Array(result.length);
        idunvertraeglichkeiten = new Array(result.length);
        unvertraeglichkeitenbezeichnung = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          unvertraeglichkeitenliste[i] = new Unvertraeglichkeit(result[i].idunvertraeglichkeiten, result[i].unvertraeglichkeitenbezeichnung);
          idunvertraeglichkeiten[i] = result[i].idunvertraeglichkeiten;
          unvertraeglichkeitenbezeichnung[i] = result[i].unvertraeglichkeitenbezeichnung;
          console.log("Unverträglichkeiten:" + idunvertraeglichkeiten[i] + "Bezeichnung:" + unvertraeglichkeitenbezeichnung[i]);
        };
        unvertraeglichkeitennogos = new Array (idunvertraeglichkeiten);
    });

    con.query("SELECT * FROM nogos", function (err, result, fields) {
      if (err) throw err;
        for (var i = 0; i < result.length; i++) {
          for (var k = 0; k < gerichte.length; k++) {
            if (gerichte[k].id == result[i].idgericht) {
              if (result[i].idessensgewohnheiten >= 0) {
                gerichte[k].addEssgewohnheit(essgewohnheitenliste[result[i].idessensgewohnheiten].name);
              }
              if (result[i].idunvertraeglichkeiten >= 0) {
                gerichte[k].addUnvertraeglichkeit(unvertraeglichkeitenliste[result[i],idunvertraeglichkeiten].name);
              }
            }
          }
        };
    });

  });


  app.get('/regis', (req, res) => {
      console.log('Request for regis page recieved');
      res.render('regis', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe,gewohnheitsbezeichnung});
  })


  app.get('/shuffle', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('shuffle', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe, idessensgewohnheiten, gewohnheitsbezeichnung, idunvertraeglichkeiten, unvertraeglichkeitenbezeichnung, zutatennogos, gewohnheitennogos, unvertraeglichkeitennogos});
    })

  app.get('/login', (req, res) => {
        console.log('Request for nogos page recieved');
        res.render('login', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe,gewohnheitsbezeichnung});
  })


  app.get('/', (req, res) => {
      console.log('Request for home recieved');
      res.render('index', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe, idessensgewohnheiten, gewohnheitsbezeichnung, idunvertraeglichkeiten, unvertraeglichkeitenbezeichnung, zutatennogos, gewohnheitennogos, unvertraeglichkeitennogos});
  })


  app.get('/nogos', (req, res) => {
      console.log('Request for nogos page recieved');
      res.render('nogos', {gerichttitel, idgericht, idzutat, bezeichnung, menge, mengenangabe, idessensgewohnheiten, gewohnheitsbezeichnung, idunvertraeglichkeiten, unvertraeglichkeitenbezeichnung, zutatennogos, gewohnheitennogos, unvertraeglichkeitennogos});
  })
