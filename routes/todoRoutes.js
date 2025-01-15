const express = require("express");
const router = express.Router();
const { createTodo, read, removeTodo } = require("../controller/todoController");

router.post("/todo/create", createTodo);
router.get("/todos", read);
router.delete("/todo/:id", removeTodo);

module.exports = router;
