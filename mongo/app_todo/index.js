require('dotenv').config()

var express = require ('express'), //, to chain declarations not req vv
  app = express(), //executing express as a function on app var
  port = process.env.PORT || 3000, //env or port# as a var
  bodyParser = require('body-parser'); //to access the data coming in on express routes. Parses data strings into obj we can use

var todoRoutes = require('./routes/todos') //var to include the exports of our todoRoutes.js file in our main app file

app.use(bodyParser.json()); //these two lines allow us to access the request body of a put or post req ^^vv
app.use(bodyParser.urlencoded({extended: true})); 
// specifying implied root dirs to serve static assets

// app.use(express.static('public')) this will work but..
app.use(express.static(__dirname + '/public')) // to be more explicit
  // this is for reference to css from html file
app.use(express.static(__dirname + '/views'))
  //to reference current dir/views for use such as below vv
                                                        //vv
//app.get() defining routes
app.get('/', function(req, res){ //when requesting from ex. 3000/
  res.sendFile('index.html'); // currentdir/views/index.html
})

//specifying starting route so that all of our todo routes will be implied this way
app.use('/api/todos', todoRoutes);

//app.listen() to start server
app.listen(process.env.PORT, function(){ //points to env file where PORT is declared. in c9, .env is already set
  console.log('app is running on port ' + port);
}) //need to privide a port, for cloud9, simply use process.env.PORT rather than 3000 or whatever