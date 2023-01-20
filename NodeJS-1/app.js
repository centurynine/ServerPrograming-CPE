const express = require("express");
const fs = require("fs");
const app = express();
app.set("view engine", "ejs");
app.set("views", "NodeJS-1/pages");
app.use(express.static(__dirname + '/pages'));
app.use(express.json())
app.get('', (req, res)=> {
  res.render('index')
})
app.get('/home', (req, res)=> {
  res.render('index')
})
app.get('/register', (req, res)=> {
  res.render('register')
})
app.listen(3000, function () {
  console.log("Listening on port 3000");
});


