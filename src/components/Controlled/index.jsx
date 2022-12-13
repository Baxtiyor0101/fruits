import React from "react";
import { useState } from "react";

function Controlled() {
  const [title, setTitle] = useState("");
  const setChange = (e) => {
    setTitle(e.target.value);
  };
  console.log(title);
  return (
    <div>
      <h1>Controlled {title}</h1>
      <input onChange={(e) => setChange(e)} type="text" />
    </div>
  );
}

export default Controlled;
