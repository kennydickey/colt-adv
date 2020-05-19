var express =  require('express'); //we will need the express router
var router = express.Router(); //allows us to break routes into modules

//database
var db = require('../models') //back 1 lvl to access models dir as db
  //require will be looking for our index.js files first in models
  //in order to access db (models folder) which accesses Todo model by way if index. So with this var.. db.Todo. etc
var helpers = require('../helpers/todos') //this var will have access to the functions in our helpers/todos.js file

// router.get('/', );
// router.post('/', ); refactored to..
router.route('/') //remember, this will be /api/todos/.. when required in our main index.js file as we specified with app.use('/api/todos', todoRoutes); 
  .get(helpers.getTodos) //all todos //accessing helpers/todos file
  .post(helpers.createTodo) 

//show route (retrieve info about specified todo)
// router.get('/:todoId', );
  // ':' is common syntax to define something as a path var, here it means mongo can fill in any id
  // :todoId is a placeholder for the actual id generated from mongo
// router.put('/:todoId', );
// router.delete('/:todoId', );
router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)

module.exports = router;

//before refactor ex
// router.delete('/:todoId', function(req, res){
//   // res.send('ok ok ill delete something');
//   db.Todo.remove({_id: req.params.todoId})
//   .then(function(){
//     res.json({message: 'deleted!'})
//   })
//   .catch(function(err){
//     res.send(err);
//   })
// });
