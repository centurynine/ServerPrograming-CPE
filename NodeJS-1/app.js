
var  express = require("express");
var  fs = require("fs");
var app = express();
let port = '80'
var CryptoJS = require("crypto-js");
var func = require('./function');

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

app.get('/search', (req, res)=> {
  fs.readFile('./NodeJS-1/data.json', (err, data) => {const listObj= JSON.parse(data);
    if(err) {res.status(400).send('Error List not found');
  } else {
    res.render('index', {ListUsers: listObj});
  }
});
});
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Web listening at http://%s:%s", host, port)
})

app.get('/success', (req, res)=> {
  res.render('../pages/alertpages/alert_status.ejs', {success: 'เพิ่มข้อมูลสำเร็จ'})
});

app.get('/search/:variable', async (req, res) => {
  var variable = req.params.variable;
  await fs.readFile('./NodeJS-1/data.json', (err, data) => {const listObj= JSON.parse(data);
    if(err) {res.status(400).send('Error List not found');
  } else {
    for (let i = 0; i < listObj.length; i++) { 
      if (listObj[i].FirstName == variable) {
        res.render('search', {ListUser: listObj[i]});
      }
      if(i == listObj.length-1) {
        res.render('../pages/alertpages/alert_status.ejs',
         {status: 'searchfail'});

      }
    }
  }
});
});

app.post('/addUser', async (req, res) => {
  let data = req.body;
  Encrypted_password = CryptoJS.MD5(data.Password).toString()
  data.Password = Encrypted_password
  var url = req.url;
  var jsonData = await JSON.parse(fs.readFileSync('./NodeJS-1/data.json'));
  if (data.FirstName != '' || data.LastName != '' || data.Phone != '' || data.Email != '' || data.Password != '' || data.Faculty != '' || data.Gender != '' || data.Birthday != '') {
    for (let i=0;i < jsonData.length; i++) { 
      if (jsonData[i].Email == data.Email || (jsonData[i].FirstName == data.FirstName && jsonData[i].LastName == data.LastName)) {
        console.log('เพิ่มข้อมูลไม่สำเร็จ');
        response(res, 400, 'เพิ่มข้อมูลไม่สำเร็จ');
        return;
      }
    }
    console.log(jsonData);
    jsonData.push(data);
    jsonID = jsonData.length;
    jsonData[jsonID-1].id = jsonID;
    fs.writeFileSync('./NodeJS-1/data.json', JSON.stringify(jsonData, null, "  "));
    response(res, 200, 'เพิ่มข้อมูลสำเร็จ');
    console.log('เพิ่มข้อมูลสำเร็จ');
  } else {
    response(res, 400, 'เพิ่มข้อมูลไม่สำเร็จ');
    console.log('เพิ่มข้อมูลไม่สำเร็จ');
  }}) 


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

function response(res, status, message) {
  res.status(status).json({message: message});
}


function searchData (data, searchname) {
  for (let i = 0; i < data.length; i++) {
    data[i].FirstName = data[i].FirstName.toLowerCase();
    data[i].LastName = data[i].LastName.toLowerCase();
    data[i].Email = data[i].Email.toLowerCase();
    data[i].Phone = data[i].Phone.toLowerCase();
    searchname = searchname.toLowerCase();
    if (data[i].FirstName == searchname || data[i].LastName == searchname || data[i].Email == searchname || data[i].Phone == searchname) {
      console.log('พบข้อมูล');
      return data[i];
    }
    else {
      console.log('ไม่พบข้อมูล');
    }
    return false;
}

  return false;
}
 
function stop() {
  process.exit()
}