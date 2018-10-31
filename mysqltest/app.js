
var express = require("express");
var path = require("path");
var app = express();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "what2eat"
});



// Set the default views directory to html folder
app.set('views', path.join(__dirname, 'html'));

// Set the folder for css & java scripts & img
app.use(express.static(path.join(__dirname,'css')));
app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.listen(3000, () => {
    console.log("Server is running at localhost:3000");
});

var bez;

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM zutat", function (err, result, fields) {
      if (err) throw err;
       bez = new Array(result.length);
        for (var i = 0; i < result.length; i++) {
          bez[i] = result[i].bezeichnung;
          console.log( bez[i]);
        };
    });
  });

app.get('/', (req, res) => {
      console.log('Request for home recieved');
      res.render('index', {bez});
  })

app.get('/regis', (req, res) => {
      console.log('Request for regis page recieved');
      res.render('regis');
  })

app.get('/nogos', (req, res) => {
      console.log('Request for nogos page recieved');
      res.render('nogos');
  })
