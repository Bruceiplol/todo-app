import React, { useState, useEffect } from "react";
import "./App.css";
import { getTodos, createTodo, removeTodo } from "./util";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    if (!response.error) {
      setTodos(response.data);
    } else {
      console.error("Failed to fetch todos:", response.error);
    }
  };

  const handleCreate = async () => {
    if (!description) {
      alert("Description is required");
      return;
    }
    const response = await createTodo(JSON.stringify({ description }));
    if (!response.error) {
      setTodos((prev) => [...prev, response.data]);
      setDescription("");
    } else {
      console.error("Failed to create todo:", response.error);
    }
  };

  const handleDelete = async (id) => {
    const result = await removeTodo(id);
    if (result !== "deleted") {
      console.error("Failed to delete todo:", result.error);
    } else {
      setTodos((prev) => prev.filter((todo) => todo.todo_id !== id));
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter a task description"
      />
      <button onClick={handleCreate}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.todo_id}>
            {todo.description}{" "}
            <button onClick={() => handleDelete(todo.todo_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
