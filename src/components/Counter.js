import Button from "./Button";
import Image from "./Image";
import Paragraph from "./Paragraph";
import React from "react";
import minus from "../data/images/icon-minus.svg";
import plus from "../data/images/icon-plus.svg";

const Counter = ({ prodCounter, setProdCounter, stock }) => {
  const checkStock = (n) => {
    if (n < 0) {
      return 0;
    }
    if (n > stock) {
      return stock;
    }
    return n;
  };
  return (
    <div className="container-counter">
      <Button
        text={<Image imgSrc={minus} />}
        cn="small btn-counter"
        handleClick={() => {
          setProdCounter(checkStock(prodCounter - 1));
        }}
      />
      <Paragraph text={prodCounter} cn="counter" />
      <Button
        text={<Image imgSrc={plus} />}
        cn="small btn-counter"
        handleClick={() => {
          setProdCounter(checkStock(prodCounter + 1));
        }}
      />
    </div>
  );
};

export default Counter;
