import React, { useState } from "react";
import { isRoyalFlush, isQuads, isFullHouse, isFlush, isStraight, isThreeOfAKind, isOnePair, isTwoPair, isStraightFlush } from "../combinations/fileCombinations";

const Combinations = (props) => {
  const [cards, setCards] = useState(
    props.table.map((card) => ({
      id: card.id,
      value: card.value,
      symbol: card.symbol,
    }))
  );

  if (isRoyalFlush(cards)) return <h1> - Royal flush</h1>;
  if (isStraightFlush(cards)) return <h1> - Straight flush</h1>;
  if (isQuads(cards)) return <h1> - Four of a kind (Quads)</h1>;
  if (isFullHouse(cards)) return <h1> - Full house</h1>;
  if (isFlush(cards)) return <h1> - Flush</h1>;
  if (isStraight(cards)) return <h1> - Straight</h1>;
  if (isThreeOfAKind(cards)) return <h1> - Three of a kind</h1>;
  if (isTwoPair(cards)) return <h1> - Two pair</h1>;
  if (isOnePair(cards)) return <h1> - One pair</h1>;
  else return <h1>High card</h1>
};

export default Combinations;
