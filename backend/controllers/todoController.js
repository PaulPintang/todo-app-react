const asyncHandler = require("express-async-handler");

const Todo = require("../models/todoModel");

// get request / get todo
// @route /api/todos
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// post request / add todo
// @route /api/todos
const addTodo = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const todo = await Todo.create({
    text: req.body.text,
  });
  res.status(200).json(todo);
});

// put request / edit todo
// @route /api/todos/:id
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedTodo);
});

// delete request / delete todo
// @route /api/todos/:id
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  console.log(todo);
  if (!todo) {
    res.status(400);
    throw new Error("Todo not found");
  }

  await todo.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
