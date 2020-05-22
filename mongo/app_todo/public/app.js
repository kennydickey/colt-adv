// alert('hi from app js');

//code to run after dom has loaded ex. we need something to place data into
$(document).ready(function(){
  $.getJSON('/api/todos') //relative path requesting our server
    //getJSON is just more explicit than get
  // .then(function(data){
  //   console.log(data)
  // })
  .then(addTodos)
  $('#todoInput').keypress(function(event){
    if(event.which == 13) {
      // console.log('you hit enter')
      createTodo();
    }
  });
  
  $('.list').on('click', 'li', function(){
    console.log($(this)) //to see what 'this' is
    updateTodo($(this)) //this refers to exact li as an obj
  })

  $('.list').on('click', 'span', function(ev){ 
    //needs to be attached to something that is there when page loads (.list), won't work otherwise. Routing through .list to listen specifically for span
    ev.stopPropagation(); //stops event from bubbling so preventing parent event handlers from being notified of event :)
    removeTodo($(this).parent()); //gives us id that was created in newTodo.data in addTodo fn
  })
});
//inside the (document).ready ^^

function addTodo(todo) {
  // console.log(todo.name);
  var newTodo = $('<li class="task">'+todo.name + ' <span>X </span>' + '</li>'); //make sure to use different parens in cases like this
  newTodo.data('id', todo._id) //key of id, val of mongo stored id, as seen in postman, to access later in removeTodo
  newTodo.data('completed', todo.completed) //saving completed status to access in updateTodo fn
    if(todo.completed){ //if completed is true..
      newTodo.addClass('done');
    }
    $('.list').append(newTodo);
}

function addTodos(todos) {
  //add todos to page here
  todos.forEach(function(todo){ // for each single todo..
    addTodo(todo); //add todo for each todo, ! moved into separate fn
    //note: also used in createTodo fn
  })
}

function createTodo() {
  //send req to create new todo
  var userInput = $('#todoInput').val();
  // console.log(userInput);
  $.post('/api/todos',{name: userInput}) //sets post with this key and val
  .then(function(newTodo){ //<- newly crerated todo from input passes into newTodo
    $('#todoInput').val(''); //setting form val to ''
    // console.log(newTodo); //we get our data as an obj from .post I think
    addTodo(newTodo); //also add todo when our post request comes back, so it will append to our list
  })
  .catch(function(err){
    console.log(err);
  })
}

function removeTodo(todo){
  var clickedId = todo.data('id'); // $(this).parent() is the data passed in as todo //gives us id that was created in newTodo.data in addTodo fn
    var deleteUrl = '/api/todos/' + clickedId; // constructed url
    $.ajax({
      method: 'DELETE',
      url: deleteUrl
    })
    .then(function(data){
      todo.remove();
      console.log(data);
    })
    .catch(function(err){
      console.log(err);
    })
}

function updateTodo(todo){
  var updateUrl = '/api/todos/' + todo.data('id');
  var isDone = !todo.data('completed'); //access todo.completed boolean that was created in addTodo (when todo was created) and give it opposete boolean
  var updateData = {completed: isDone} //isDone bool as an obj
  console.log(updateData);
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData //sending obj we created in put req
  })
  .then(function(udatedTodo){
    console.log(udatedTodo); //logs all obj data from ajax call
    todo.toggleClass('done'); //update view //'done' class is created when each obj is created with addTodo, toggles this val
    todo.data('completed', isDone); //also change value of 'completed' to opposite boolean in .data method
  })
}
