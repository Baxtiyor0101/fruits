import React from "react";
import { useState } from "react";

function State() {
  const [state, setState] = useState(0);
  const onAdd = () => {
    setState(state + 1);
  };

  console.log(state);
  return (
    <>
      <h1>qiymat {state}</h1>
      <button onClick={onAdd}>+</button>
      <button onClick={() => setState(state - 1)}>-</button>
    </>
  );
}

export default State;
