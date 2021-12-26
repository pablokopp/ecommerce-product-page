import React, { useContext } from "react";

import Button from "./Button";
import { CartContext } from "../context/CartContext";
import Image from "./Image";
import Paragraph from "./Paragraph";
import cartIcon from "../data/images/icon-cart2.svg";

const AddCartButton = ({ prodCounter, setProdCounter, prodData }) => {
  const { addToCart, cart } = useContext(CartContext);

  return (
    <Button
      cn="big btn-cart"
      text={
        <>
          <Image imgSrc={cartIcon} />
          <Paragraph text="Add to cart" cn="cart" />
        </>
      }
      handleClick={() => {
        addToCart(prodData, prodCounter);
        console.log(cart);
        setProdCounter(0);
      }}
    ></Button>
  );
};

export default AddCartButton;
