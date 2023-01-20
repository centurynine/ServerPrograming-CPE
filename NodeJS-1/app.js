const express = require("express");
const fs = require("fs");
let port = '80'
const app = express();
app.set("view engine", "ejs");
app.set("views", "NodeJS-1/pages");
app.use(express.static(__dirname + '/pages'));
app.use(express.json())
app.get('', (req, res)=> {
  res.render('index')
})
app.get('/', (req, res)=> {
  res.render('index')
})
app.get('/home', (req, res)=> {
  res.render('index')
})
app.get('/register', (req, res)=> {
  res.render('register')
})
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
app.post('/addUser', async (req, res) => {
  let data = req.body
  const datsun = await JSON.parse(fs.readFileSync('NodeJS-1/data.json'))
  datsun.push(data)
  fs.writeFileSync('data.json', JSON.stringify(datsun))
  res.send('succeeds')
})


