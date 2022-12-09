import React from "react";
import { cards } from "../../mock/card";
import "./styled.css";

function Maps() {
  console.log(cards[0].img);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className="container">
        {cards.map((val) => {
          return (
            <>
              <div className="item">
                <img src={val.img} alt="images" />
                <h3>Name: {val.name}</h3>
                <h4>Title: {val.title}</h4>
                <p>Age: {val.age}</p>
                <button>See more ...</button>
              </div>
            </>
          );
        })}
        {/* sdhjbdshb */}
        {/* <div className="item">
          <img src={cards[0].img} alt="images" />
          <h3>Name: {cards[0].name}</h3>
          <h4>Title: {cards[0].title}</h4>
          <p>Age: {cards[0].age}</p>
          <button>See more ...</button>
        </div>
        <div className="item">
          <img src={cards[0].img} alt="images" />
          <h3>Name: {cards[0].name}</h3>
          <h4>Title: {cards[0].title}</h4>
          <p>Age: {cards[0].age}</p>
          <button>See more ...</button>
        </div>
        <div className="item">
          <img src={cards[0].img} alt="images" />
          <h3>Name: {cards[0].name}</h3>
          <h4>Title: {cards[0].title}</h4>
          <p>Age: {cards[0].age}</p>
          <button>See more ...</button>
        </div>
        <div className="item">
          <img src={cards[0].img} alt="images" />
          <h3>Name: {cards[0].name}</h3>
          <h4>Title: {cards[0].title}</h4>
          <p>Age: {cards[0].age}</p>
          <button>See more ...</button>
        </div>
        <div className="item">
          <img src={cards[0].img} alt="images" />
          <h3>Name: {cards[0].name}</h3>
          <h4>Title: {cards[0].title}</h4>
          <p>Age: {cards[0].age}</p>
          <button>See more ...</button>
        </div> */}
      </div>
    </div>
  );
}

export default Maps;
