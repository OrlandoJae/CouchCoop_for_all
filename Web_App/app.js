var express = require("express");
var path = require("path");
var routes = require('./routes');
var mysql = require("./mysql")
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

app.use('/', routes);
app.use('/', mysql);

app.listen(3000, () => {
    console.log("Server is running at localhost:3000");
});
