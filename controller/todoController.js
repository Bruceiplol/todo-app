const { create, get, remove } = require("../model/todoModel");
const formidable = require("formidable");

exports.createTodo = (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: "Description is required" });
  }
  create(description)
    .then((newTask) => res.status(201).json({ data: newTask.rows[0] }))
    .catch((error) => res.status(500).json({ error: error.message }));
};

exports.read = async (req, res) => {
  try {
    const tasks = await get();
    res.json({ data: tasks.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.removeTodo = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }
  remove(id)
    .then(() => res.status(200).json({ data: id }))
    .catch((error) => res.status(500).json({ error: error.message }));
};
