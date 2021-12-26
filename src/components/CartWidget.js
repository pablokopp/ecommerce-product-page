import Button from "./Button";
import Image from "./Image";
import React from "react";
import cartIcon from "../data/images/icon-cart.svg";

const CartWidget = () => {
  return (
    <div className="container-cartWidget">
      <Button
        cn="cartWidget"
        text={<Image imgSrc={cartIcon} cn="cartWidget" />}
      />
    </div>
  );
};

export default CartWidget;
