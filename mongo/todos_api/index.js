var express = require ('express'), //, to chain declarations not req vv
  app = express(), //executing express as a function on app var
  port = process.env.PORT || 3000; //env or port# as a var

require('dotenv').config()

//app.listen() to start server
//app.get() defining routes
app.get('/', function(req, res){ //when requesting from ex. 3000/
  res.send('hi from express')
})
app.get('/happy', function(req, res){ //http://localhost:3000/happy
  res.send(':)')
})

app.listen(port, function(){ //points to env file where PORT is declared. in c9, .env is already set
  console.log('app is running on port ' + port);
}) //need to privide a port, for cloud9, simply use process.env.PORT rather than 3000 or whatever