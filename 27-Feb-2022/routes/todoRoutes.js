const express = require("express");
const router = express.Router();
const {
  addTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  deleteAllTodos,
} = require("../controllers/todoCtrl");

//crete todo api routes using router

//Add Todo http://localhost:3000/api/todo
router.post('/todo', addTodo);

//Get all todos http://localhost:3000/api/todo
router.get("/todo", getAllTodos);

//Get todo http://localhost:3000/api/todo/621b8ef05e633c0b36d967d1
router.get("/todo/:todoid", getTodo);

//update todo http://localhost:3000/api/todo/621b8ef05e633c0b36d967d1
router.put("/todo/:todoid", updateTodo);

//delete todo http://localhost:3000/api/todo/621b8ef05e633c0b36d967d1
router.delete("/todo/:todoid", deleteTodo);

//delete all todos http://localhost:3000/api/todo
router.delete("/todo", deleteAllTodos);

module.exports = router