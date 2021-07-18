import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <li>
      <div
        onClick={() =>
          props.onClick({
            id: props.id,
            value: props.value,
            sign: props.sign,
            symbol: props.symbol,
          })
        }
        className="card"
      >
        <div className="num">
          {props.value} 
          <img src={props.sign} alt="Brak symbolu"/>
        </div>
      </div>
    </li>
  );
};

export default Card;
