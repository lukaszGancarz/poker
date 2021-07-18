export const isRoyalFlush = (cards) => {
  let sym = "";
  let isInRow = false;
  let isSameSymbol = true;
  const values = cards.map((card) => card.value);
  //sprawdzanie znaków
  if (
    values.includes("10") &&
    values.includes("J") &&
    values.includes("Q") &&
    values.includes("K") &&
    values.includes("A")
  )
    isInRow = true;

  //sprawdzanie symboli
  cards.forEach((element) => {
    if (sym === "") sym = element.symbol;
    if (sym !== element.symbol) isSameSymbol = false;
    return isSameSymbol;
  });

  return isSameSymbol && isInRow;
};

export const isStraightFlush = (cards) => {
  let sym = "";
  let isInRow = false;
  let isSameSymbol = true;
  let firstElementFound = false;
  let firstIndex = 0;
  const symbols = cards.map((card) => card.value);
  const temp = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  //sprawdzanie symboli
  cards.forEach((element) => {
    if (sym === "") sym = element.symbol;
    if (sym !== element.symbol) isSameSymbol = false;
    return isSameSymbol;
  });

  symbols.forEach((element) => {
    //szukanie pierwszego indexu z temp
    if (!firstElementFound) {
      if (temp.includes(element)) firstIndex = temp.indexOf(element);
      firstElementFound = true;
    }
    //porównanie kolejnych indeksów
    else {
      if (temp.indexOf(element) === 0) firstIndex = temp.indexOf(element);
      if (temp.indexOf(element) < firstIndex) {
        firstIndex = temp.indexOf(element);
      }
      return;
    }
  });
  //sprawdzanie, czy jest w kolejności
  if (
    symbols.includes(temp[firstIndex]) &&
    symbols.includes(temp[firstIndex + 1]) &&
    symbols.includes(temp[firstIndex + 2]) &&
    symbols.includes(temp[firstIndex + 3]) &&
    symbols.includes(temp[firstIndex + 4])
  )
    isInRow = true;

  return isSameSymbol & isInRow;
};

export const isQuads = (cards) => {
  let couter = 0;
  let isQuads = false;
  let firstItemSet = false;
  let check = "";
  const values = cards.map((card) => card.value);

  if (!firstItemSet) check = values[0];

  values.forEach((element) => {
    if (element === check) couter++;
    if (couter === 4) isQuads = true;
  });

  if (isQuads) return isQuads;

  couter = 0;
  check = values[1];
  values.forEach((element) => {
    if (element === check) couter++;
    if (couter === 4) isQuads = true;
  });

  return isQuads;
};

export const isFullHouse = (cards) => {
  const values = cards.map((card) => card.value);
  const symbols = [];

  values.forEach((element) => {
    if (!symbols.includes(element)) symbols.push(element);
  });

  return symbols.length === 2;
};

export const isFlush = (cards) => {
  let sym = "";
  let isSameSymbol = true;
  const values = cards.map((card) => card.value);

  cards.forEach((element) => {
    if (sym === "") sym = element.symbol;
    if (sym !== element.symbol) isSameSymbol = false;
    return isSameSymbol;
  });
  return isSameSymbol;
};

export const isStraight = (cards) => {
  let isInRow = false;
  let firstElementFound = false;
  let firstIndex = 0;
  const symbols = cards.map((card) => card.value);
  const temp = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  symbols.forEach((element) => {
    //szukanie pierwszego indexu z temp
    if (!firstElementFound) {
      if (temp.includes(element)) {
        firstIndex = temp.indexOf(element);
        firstElementFound = true;
      }
    }
    //porównanie kolejnych indeksów
    else {
      if (temp.indexOf(element) === 0) {
        firstIndex = temp.indexOf(element);
      }
      if (temp.indexOf(element) < firstIndex) {
        firstIndex = temp.indexOf(element);
      }
    }
  });
  //sprawdzanie, czy jest w kolejności
  if (
    symbols.includes(temp[firstIndex + 0]) &&
    symbols.includes(temp[firstIndex + 1]) &&
    symbols.includes(temp[firstIndex + 2]) &&
    symbols.includes(temp[firstIndex + 3]) &&
    symbols.includes(temp[firstIndex + 4])
  )
    isInRow = true;
  return isInRow;
};

export const isThreeOfAKind = (cards) => {
  let couter = 0;
  let isTriple = false;
  let check = "";
  const values = cards.map((card) => card.value);

  check = values[0];

  values.forEach((element) => {
    if (element === check) couter++;
    if (couter === 3) isTriple = true;
  });
  if (isTriple) return isTriple;

  couter = 0;
  check = values[1];
  values.forEach((element) => {
    if (element === check) couter++;
    if (couter === 3) isTriple = true;
  });

  couter = 0;
  check = values[2];
  values.forEach((element) => {
    if (element === check) couter++;
    if (couter === 3) isTriple = true;
  });

  return isTriple;
};

export const isTwoPair = (cards) => {
  const numberFirst = [];
  const numberSecond = [];
  const numberThird = [];
  const values = cards.map((card) => card.value);

  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      numberFirst.push(values[i]);
      continue;
    }

    // druga karta
    if (i === 1 && values[i] === numberFirst[0]) numberFirst.push(values[i]);
    else if (i === 1 && values[i] !== numberFirst[0])
      numberSecond.push(values[i]);

    // trzecia karta
    if (i === 2 && values[i] === numberFirst[0]) numberFirst.push(values[i]);
    else if (i === 2 && values[i] === numberSecond[0])
      numberSecond.push(values[i]);
    else if (i === 2) numberThird.push(values[i]);

    //czwarta karta
    if (i === 3 && values[i] === numberFirst[0]) numberFirst.push(values[i]);
    else if (i === 3 && values[i] === numberSecond[0])
      numberSecond.push(values[i]);
    else if (i === 3 && values[i] === numberThird[0])
      numberThird.push(values[i]);

    //piąta karta
    if (i === 4 && values[i] === numberFirst[0]) numberFirst.push(values[i]);
    else if (i === 4 && values[i] === numberSecond[0])
      numberSecond.push(values[i]);
    else if (i === 4 && values[i] === numberThird[0])
      numberThird.push(values[i]);
  }
  if (
    (numberSecond.length === 2 && numberFirst.length === 2) ||
    (numberFirst.length === 2 && numberThird.length === 2) ||
    (numberSecond.length === 2 && numberThird.length === 2)
  )
    return true;
};

export const isOnePair = (cards) => {
  const numFirst = [];
  const numSecond = [];
  const numThird = [];
  const numFourth = [];
  const values = cards.map((card) => card.value);

  values.forEach((element) => {
    if (numFirst.length === 0) numFirst.push(element);
    else if (element === numFirst[0]) numFirst.push(element);
    else if (numSecond.length === 0) numSecond.push(element);
    else if (element === numSecond[0]) numSecond.push(element);
    else if (numThird.length === 0) numThird.push(element);
    else if (element === numThird[0]) numThird.push(element);
    else if (numFourth.length === 0) numFourth.push(element);
    else if (element === numFourth[0]) numFourth.push(element);
  });
  if (
    numFirst.length === 2 ||
    numSecond.length === 2 ||
    numThird.length === 2 ||
    numFourth.length === 2
  )
    return true;
};
