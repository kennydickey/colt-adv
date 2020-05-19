//routes helper

var db = require('../models') //in order to access db (models folder, which accesses Todo model by way if index. So with this var.. db.Todo. etc

exports.getTodos = function(req, res){ 
  // res.send("hello from todos routes");
  db.Todo.find() //mongoose connects to db and finds all todos
  .then(function(todos){ //result of .find() is passed in here as todos
    res.json(todos); //return todos as json
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.createTodo = function(req,res){ //named such for refactor
  // res.send('this is the post rt') //to verify in postman
  // console.log(req.body); //bodyParser in index.js gives us the ability to reference req.body as parsed obj
  db.Todo.create(req.body) //
  .then(function(newTodo){ //req.body is passed in as newTodo
    // res.json(newTodo); better yet..
    res.status(201).json(newTodo); //201 means something was created
  })
  .catch(function(error){ //
    res.send(err);
  })
}

exports.getTodo = function(req, res){ 
    //findById is a mongoose function
  db.Todo.findById(req.params.todoId) //extract todoId from url
    //.params will contain whatever route input vars are -> /:todoId
  .then(function(foundTodo){ //results from todoId as foundTodo
    res.json(foundTodo);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.updateTodo = function(req, res){
  // res.send('update route!')
  //findOneAndUpdate is a mongoose function that uses this syntax vv
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true}) //use obj in req.body //new: true makes put response update with new data
  .then(function(todo){
    res.json(todo);
  })
  .catch(function(err){
    res.send(err);
  })
}

exports.deleteTodo = function(req, res){
  // res.send('ok ok ill delete something');
  //remove is a mongoose function that uses this syntax vv
  db.Todo.remove({_id: req.params.todoId})
  .then(function(){
    res.json({message: 'deleted!'})
  })
  .catch(function(err){
    res.send(err);
  })
}

module.exports = exports; //^^notice above we add our vars like getTodos to this obj so they will all be available to our routes