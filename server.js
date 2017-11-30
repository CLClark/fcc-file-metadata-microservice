// server.js
// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

var multer  = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage }) //Buffer storage (in memory)

app.post('/uploader/', upload.single('gift'), function(request, response, next){
  // req.file `gift` file 
  // req.body text fields
  console.log(request.file.size);
  response.json(jfyer(request.file.size));
    
});


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


//simplify the response calls
function jfyer (longOne){  
  var jOut = { "size": longOne};  
  var stringOut = JSON.stringify(jOut);   
  //return stringOut;
  return jOut;
}

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
