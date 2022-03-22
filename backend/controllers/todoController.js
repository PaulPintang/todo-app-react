// get request / get todo
// @route /api/todos
const getTodos = async (req, res) => {
  res.status(200).json({
    title: "Get todo",
  });
};

// post request / add todo
// @route /api/todos
const addTodo = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  res.status(200).json({
    title: "Add todo",
  });
};

// put request / edit todo
// @route /api/todos/:id
const updateTodo = async (req, res) => {
  res.status(200).json({
    title: `Update todo ${req.params.id}`,
  });
};

// delete request / delete todo
// @route /api/todos/:id
const deleteTodo = async (req, res) => {
  res.status(200).json({
    title: `Delete todo ${req.params.id}`,
  });
};

module.exports = {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
