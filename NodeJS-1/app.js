
var  express = require("express");
var  fs = require("fs");
var app = express();
let port = '80'

app.set("view engine", "ejs");
app.set("views", "NodeJS-1/pages");
app.use(express.static(__dirname + '/pages'));
app.use(express.json())
app.get('', (req, res)=> {
  res.render('register')
})
app.get('/', (req, res)=> {
  res.render('register')
})
app.get('/home', (req, res)=> {
  res.render('register')
})
app.get('/register', (req, res)=> {
  res.render('register')
})
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
// app.post('/addUser', async (req, res) => {
  
// })


app.post('/addUser', async (req, res) => {
  let data = req.body
  var jsonData = await JSON.parse(fs.readFileSync('./NodeJS-1/data.json'));
  console.log(jsonData);
  jsonData.push(data);
  fs.writeFileSync('./NodeJS-1/data.json', JSON.stringify(jsonData))
  res.send('Success');
})


// var user = {
//   "user4" : {
//      "name" : "mohit",
//      "password" : "password4",
//      "profession" : "teacher",
//      "id": 4
//   }
// }

// app.post('/addUser', function (req, res) {
//   // First read existing users.
//   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
//      data = JSON.parse( data );
//      data["user4"] = user["user4"];
//      console.log( data );
//      res.end( JSON.stringify(data));
//   });
// })



// app.get('/listUsers2', function (req, res) {
//   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
//      console.log( data );
//      res.end( data );
//   });
// })

// app.get('/listUsers', (req, res) => {
//   res.json(users)
// })
// app.post('/users', (req, res) => {
//   users.push(req.body)
//   let json = req.body
//   res.send(`Add new user '${json.username}' completed.`)
// })
// const router = express.Router();

// router.post('/foo', (req, res)=> {
//   res
//       .status(200)
//       .send({msg: 'Foo!'})
// })