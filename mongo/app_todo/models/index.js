//this file is where we connect to mongoose

var mongoose = require('mongoose');
mongoose.set('debug', true); //allows us to see when things are sent to db or failing in terminal, not req but good to have
mongoose.connect('mongodb://localhost/todo-api'); //connect to db server and specify database name (todo-api)

//rather than having to do callback functions ..
mongoose.Promise = Promise; //tell mongoose we will use promises
//..so we can use db.toDo.find() .then .catch

module.exports.Todo = require('./todo'); //require todo.js file's Todo export. Since by default, when we require the models dir, it looks for an index.js file, this will also access the todo.js file and out Todo model