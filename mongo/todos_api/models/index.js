var mongoose = require('mongoose');
mongoose.set('debug', true); //allows us to see when things are sent to db or failing in terminal
mongoose.connect('mongodb://localhost/todo-api'); //connect to db server and specify database name (todo-api)

mongoose.Promise = Promise; //tell mongoose we will use promises

module.exports.Todo = require('./todo'); //require todo.js file