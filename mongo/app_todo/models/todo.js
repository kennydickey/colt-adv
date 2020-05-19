//logic for todo schema or todo 'model'

var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({ //create schema
  name: { //this could be just String, but we make it an obj to give other params
    type: String,
    required: 'Name cannot be blank!'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now //current date whenever a new todo is created
  }
});

var Todo = mongoose.model('Todo', todoSchema); //compile into a model
    //syntax is ('name of model', schEma)
module.exports = Todo; //when we require todo.js in another file, Todo is what is exported