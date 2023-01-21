
var  express = require("express");
var  fs = require("fs");
var app = express();
let port = '80'

app.set("view engine", "ejs");
app.set("views", "NodeJS-1/pages");
app.use(express.static(__dirname + '/pages'));
app.use(express.json())
app.get('', (req, res)=> {
  fs.readFile('./NodeJS-1/data.json', (err, data) => {const listObj= JSON.parse(data);
    if(err) {res.status(400).send('Error List not found');
  } else {
    res.render('index', {ListUsers: listObj});
  }
});
});
 
app.get('/home', (req, res)=> {
  fs.readFile('./NodeJS-1/data.json', (err, data) => {const listObj= JSON.parse(data);
    if(err) {res.status(400).send('Error List not found');
  } else {
    res.render('index', {ListUsers: listObj});
  }
});
});

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
  jsonID = jsonData.length;
  jsonData[jsonID-1].id = jsonID;
  fs.writeFileSync('./NodeJS-1/data.json', JSON.stringify(jsonData))
  res.send('Success');
})

app.get('/user/:id', async (req, res) => {
  id = req.params.id;
  await fs.readFile('./NodeJS-1/data.json', (err, data) => {const listObj= JSON.parse(data);
    if(err) {res.status(400).send('Error List not found');
  } else {
    for (let i = 0; i < listObj.length; i++) { 
      if (listObj[i].id == id) {
        res.render('user', {ListUser: listObj[i]});
      }
    }
  }
});
})
