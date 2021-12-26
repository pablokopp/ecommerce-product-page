import AddCartButton from "../components/AddCartButton";
import Counter from "../components/Counter";
import React from "react";
import { useState } from "react";

const BuyContainer = ({ stock, prodData }) => {
  const [prodCounter, setProdCounter] = useState(0);

  return (
    <div className="container-buy">
      <Counter
        prodCounter={prodCounter}
        setProdCounter={setProdCounter}
        stock={stock}
      />
      <AddCartButton
        prodCounter={prodCounter}
        setProdCounter={setProdCounter}
        prodData={prodData}
      />
    </div>
  );
};

export default BuyContainer;
