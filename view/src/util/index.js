// const API_BASE_URL = "http://localhost:8000/api";

export const createTodo = async (todo) => {
  try {
    const res = await fetch(`api/todo/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: todo,
    });
    return res.json();
  } catch (error) {
    return { error };
  }
};

export const getTodos = async () => {
  try {
    const res = await fetch(`api/todos`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
};

export const removeTodo = async (id) => {
  try {
    await fetch(`api/todo/${id}`, {
      method: "DELETE",
    });
    return "deleted";
  } catch (error) {
    return { error };
  }
};
