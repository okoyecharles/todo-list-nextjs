import { useState } from "react";

export default function useStorage() {
  const storeKey = "next-todo-app";
  const store = localStorage.getItem(storeKey) ?? [];
  const [state, setState] = useState(store);

  function setStoreState(newState) {
    localStorage.setItem(storeKey, newState);
    setState(newState);
  };

  return [state, setStoreState];
}