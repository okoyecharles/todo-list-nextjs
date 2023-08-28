import { useEffect, useState } from "react";

export default function useStorage() {
  // On server side render
  if (typeof window === 'undefined') return useState([]);
  const storeKey = "next-13-todo-app";
  const [state, setState] = useState([]);

  useEffect(() => {
    const store = localStorage.getItem(storeKey);
    if (store) setState(JSON.parse(store));
  })

  function setStoreState(newState) {
    localStorage.setItem(storeKey, JSON.stringify(newState));
    setState(newState);
  };

  return [state, setStoreState];
}