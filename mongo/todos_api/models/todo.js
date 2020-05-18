//logic for todo schema

var mongoose = require('mongoose')

var todoSchema = new mongoose.Schema({ //create schema
  name: {
    type: String,
    required: 'Name cannot be blank!'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

var Todo = mongoose.model('Todo', todoSchema); //compile model

module.exports = Todo;