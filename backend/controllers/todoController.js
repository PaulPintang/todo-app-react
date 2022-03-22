// get request / get todo
// @route /api/todos
const getTodo = (req, res) => {
  res.status(200).json({
    title: "Get todo",
  });
};

// post request / add todo
// @route /api/todos
const addTodo = (req, res) => {
  res.status(200).json({
    title: "Add todo",
  });
};

// put request / edit todo
// @route /api/todos/:id
const updateTodo = (req, res) => {
  res.status(200).json({
    title: `Update todo ${req.params.id}`,
  });
};

// delete request / delete todo
// @route /api/todos/:id
const deleteTodo = (req, res) => {
  res.status(200).json({
    title: `Delete todo ${req.params.id}`,
  });
};

module.exports = {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
};
