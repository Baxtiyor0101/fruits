import React from "react";
import "./style.css";

function Main(props) {
  return (
    <div className="item">
      <img className="imgs" src={props.image} alt={props.alt} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Main;
