//add todo model for db management
const Todo = require("../models/todoModel");

exports.addTodo = (req, res) => {
  try {
    console.log(req.body);
    //crete a todo with req body
    const todo = new Todo(req.body);
    //save/add todo to db
    todo.save((err, todo) => {
      if (err || !todo) {
        res.json({
          msg: err,
          success: false,
        });
      } else {
        res.json({
          msg: "Todo Added to db",
          success: true,
          data: todo,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getAllTodos = (req, res) => {
  try {
    Todo.find().exec((err, todos) => {
      if (err || !todos || todos.length == 0) {
        res.json({
          msg: "Error or todos not found",
          success: false,
        });
      } else {
        res.json({
          msg: "Todos found",
          data: todos,
          success: true,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getTodo = (req, res) => {
  try {
    Todo.findById(req.params.todoid).exec((err, todo) => {
      if (err || !todo) {
        res.json({
          msg: "todo not found",
          success: false,
        });
      } else {
        res.json({
          success: true,
          msg: "todo found",
          data: todo,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.todoid, req.body).exec((err, response) => {
    if (err) {
      res.json({
        success: false,
        msg: "unable to update",
      });
    } else {
      res.json({
        success: true,
        msg: "Todo Updatd",
      });
    }
  });
};

exports.deleteTodo = (req, res) => {
  try {
    Todo.findByIdAndDelete(req.params.todoid).exec((err) => {
      if (err) {
        res.json({
          msg: "unable to delete",
          success: false,
        });
      } else {
        res.json({
          success: true,
          msg: "Todo Deleted",
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteAllTodos = (req, res) => {
  try {
    Todo.deleteMany().exec((err) => {
      if (err) {
        res.json({
          msg: "Error while deleting todos",
          success: false,
        });
      } else {
        res.json({
          msg: "All Todos Deleted..!",
          success: true,
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
