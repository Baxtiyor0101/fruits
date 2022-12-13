import React from "react";
import { useState } from "react";
import { useRef } from "react";

function Uncontrolled() {
  const [title, settitle] = useState("a");
  const titles = useRef();
  const onCurrent = () => {
    console.log(titles.current.value);
    settitle(titles.current.value);
  };
  return (
    <div>
      <h1>Uncontrolled {title}</h1>
      <input ref={titles} type="text" />
      <button onClick={onCurrent}>add</button>
    </div>
  );
}

export default Uncontrolled;
