var express = require("express");
const router = express.Router();


  router.get('/', (req, res) => {
      console.log('Request for home recieved');
      res.render('index');
  })


  router.get('/nogos', (req, res) => {
      console.log('Request for nogos page recieved');
      res.render('nogos');
  })


  module.exports = router;
