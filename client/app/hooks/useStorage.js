import { useEffect, useState } from "react";
const BACKEND_URL = "http://localhost:4000";

function mergeTodos(clientTodos, serverTodos) {
  const merged = [];
  const exists = new Set();

  for (const todo of [...clientTodos, ...serverTodos]) {
    if (exists.has(todo.id)) continue;
    merged.push(todo);
    exists.add(todo.id);
  }

  return merged;
}

function updateTodos(id, todos) {
  fetch(`${BACKEND_URL}/todos`, {
    method: "PUT",
    body: JSON.stringify({ id, todos }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function useStorage(user) {
  const [state, setState] = useState(user?.todos || []);
  const storeKey = "next-13-todo-app";

  function setStoreState(newState) {
    setState(newState);
    // Set state locally
    localStorage.setItem(storeKey, JSON.stringify(newState));
    if (!user?.googleId && window) return;
    // Set state in backend (if logged in)
    updateTodos(user?.googleId, newState);
  }

  useEffect(() => {
    const clientTodos = JSON.parse(localStorage.getItem(storeKey));
    if (clientTodos) {
      const merged = mergeTodos(clientTodos, state);
      setStoreState(merged);
      if (user?.googleId) {
        updateTodos(user?.googleId, merged);
      }
    }
  }, []);

  return [state, setStoreState];
}
