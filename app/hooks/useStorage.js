import { useState } from "react";

export default function useStorage() {
  const storeKey = "next-todo-app";
  const storeExists = localStorage.getItem(storeKey) 
  const store = storeExists ? JSON.parse(storeExists) : [];
  const [state, setState] = useState(store);

  function setStoreState(newState) {
    localStorage.setItem(storeKey, JSON.stringify(newState));
    setState(newState);
  };

  return [state, setStoreState];
}