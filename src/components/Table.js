import React, { useState } from "react";
import "./Table.css";
import Card from "./Cards/Card";
import club from "../signs/clubs.png";
import diamond from "../signs/diamond.png";
import heart from "../signs/heart.png";
import spade from "../signs/spade.png";
import Combinations from "./Combinations";

const Table = (props) => {
  const numbers = [
    { id: 1, value: "2", sign: club, symbol: "club" },
    { id: 2, value: "3", sign: club, symbol: "club" },
    { id: 3, value: "4", sign: club, symbol: "club" },
    { id: 4, value: "5", sign: club, symbol: "club" },
    { id: 5, value: "6", sign: club, symbol: "club" },
    { id: 6, value: "7", sign: club, symbol: "club" },
    { id: 7, value: "8", sign: club, symbol: "club" },
    { id: 8, value: "9", sign: club, symbol: "club" },
    { id: 9, value: "10", sign: club, symbol: "club" },
    { id: 10, value: "J", sign: club, symbol: "club" },
    { id: 11, value: "Q", sign: club, symbol: "club" },
    { id: 12, value: "K", sign: club, symbol: "club" },
    { id: 13, value: "A", sign: club, symbol: "club" },
    { id: 14, value: "2", sign: diamond, symbol: "diamond" },
    { id: 15, value: "3", sign: diamond, symbol: "diamond" },
    { id: 16, value: "4", sign: diamond, symbol: "diamond" },
    { id: 17, value: "5", sign: diamond, symbol: "diamond" },
    { id: 18, value: "6", sign: diamond, symbol: "diamond" },
    { id: 19, value: "7", sign: diamond, symbol: "diamond" },
    { id: 20, value: "8", sign: diamond, symbol: "diamond" },
    { id: 21, value: "9", sign: diamond, symbol: "diamond" },
    { id: 22, value: "10", sign: diamond, symbol: "diamond" },
    { id: 23, value: "J", sign: diamond, symbol: "diamond" },
    { id: 24, value: "Q", sign: diamond, symbol: "diamond" },
    { id: 25, value: "K", sign: diamond, symbol: "diamond" },
    { id: 26, value: "A", sign: diamond, symbol: "diamond" },
    { id: 27, value: "2", sign: heart, symbol: "heart" },
    { id: 28, value: "3", sign: heart, symbol: "heart" },
    { id: 29, value: "4", sign: heart, symbol: "heart" },
    { id: 30, value: "5", sign: heart, symbol: "heart" },
    { id: 31, value: "6", sign: heart, symbol: "heart" },
    { id: 32, value: "7", sign: heart, symbol: "heart" },
    { id: 33, value: "8", sign: heart, symbol: "heart" },
    { id: 34, value: "9", sign: heart, symbol: "heart" },
    { id: 35, value: "10", sign: heart, symbol: "heart" },
    { id: 36, value: "J", sign: heart, symbol: "heart" },
    { id: 37, value: "Q", sign: heart, symbol: "heart" },
    { id: 38, value: "K", sign: heart, symbol: "heart" },
    { id: 39, value: "A", sign: heart, symbol: "heart" },
    { id: 40, value: "2", sign: spade, symbol: "spade" },
    { id: 41, value: "3", sign: spade, symbol: "spade" },
    { id: 42, value: "4", sign: spade, symbol: "spade" },
    { id: 43, value: "5", sign: spade, symbol: "spade" },
    { id: 44, value: "6", sign: spade, symbol: "spade" },
    { id: 45, value: "7", sign: spade, symbol: "spade" },
    { id: 46, value: "8", sign: spade, symbol: "spade" },
    { id: 47, value: "9", sign: spade, symbol: "spade" },
    { id: 48, value: "10", sign: spade, symbol: "spade" },
    { id: 49, value: "J", sign: spade, symbol: "spade" },
    { id: 50, value: "Q", sign: spade, symbol: "spade" },
    { id: 51, value: "K", sign: spade, symbol: "spade" },
    { id: 52, value: "A", sign: spade, symbol: "spade" },
  ];
  const [count, setCount] = useState(0);
  const [nums, setNums] = useState(numbers);
  const [newNums, setNewNums] = useState([]);
  const [combination, setCombination] = useState("");

  const onClickHandler = ({ id, value, sign, symbol }) => {
    if (count === 5) return;
    setNums(nums.filter((num) => num.id !== id));
    setNewNums([...newNums, nums.find((num) => num.id === id)]);
    setCount(count + 1);
  };
  const onResetHandler = () => {
    setNums(numbers);
    setNewNums([]);
    setCount(0);
  };

  return (
    <div>
      <ul className="table">
        {nums.map((num) => (
          <Card
            key={num.id}
            id={num.id}
            value={num.value}
            sign={num.sign}
            symbol={num.symbol}
            onClick={onClickHandler}
          />
        ))}
      </ul>
      <hr></hr>
      <button className="reset" onClick={onResetHandler}>
        Reset
      </button>

      <ul className="table">
        {newNums.map((num) => (
          <Card
            key={num.id}
            id={num.id}
            value={num.value}
            sign={num.sign}
            symbol={num.symbol}
          />
        ))}
        {count === 5 && (
          <Combinations className="combinations" table={newNums} />
        )}
      </ul>
    </div>
  );
};
export default Table;
