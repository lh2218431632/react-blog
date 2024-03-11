import React, { useEffect, useState } from "react";
import store from "../store";

function Counter() {
  const [count, setCount] = useState(store.getState().count);

  function increment() {
    store.dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    store.dispatch({ type: "DECREMENT" });
  }

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setCount(store.getState().count));
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
