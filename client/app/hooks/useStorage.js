import { useEffect, useState } from "react";


function updateTodos(id, todos) {
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/todos`, {
    method: "PUT",
    body: JSON.stringify({ id, todos }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function useStorage(user) {
  const [state, setState] = useState(user?.todos || []);

  function setStoreState(newState) {
    setState(newState);
    // Set state locally
    if (!user?.googleId) return;
    // Set state in backend (if logged in)
    updateTodos(user?.googleId, newState);
  }

  return [state, setStoreState];
}
