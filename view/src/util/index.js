const API_BASE_URL = "https://todo-app-36li.onrender.com/api";

export const createTodo = async (todo) => {
  try {
    const res = await fetch(`${API_BASE_URL}/todo/create`, {
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
    const res = await fetch(`${API_BASE_URL}/todos`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error };
  }
};

export const removeTodo = async (id) => {
  try {
    await fetch(`${API_BASE_URL}/todo/${id}`, {
      method: "DELETE",
    });
    return "deleted";
  } catch (error) {
    return { error };
  }
};
