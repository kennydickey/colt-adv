var express =  require('express');
var router = express.Router(); //allows us to break routes into modules

//database
var db = require('../models') //back 1 lvl to access models dir as db

router.get('/', function(req, res){
  // res.send("hello from todos routes");
  db.Todo.find()
  .then(function(todos){
    res.json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
});

router.post('/', function(req,res){
  // res.send('this is the post rt')
  // console.log(req.body); //bodyParser in index.js gives us the ability to reference req.body
  db.Todo.create(req.body)
  .then(function(newTodo){
    // res.json(newTodo);
    res.status(201).json(newTodo);
  })
  .catch(function(error){
    res.send(err);
  })
});

module.exports = router;