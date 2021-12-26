import Paragraph from "../components/Paragraph";
import React from "react";
import Title from "../components/Title";

const Price = ({ price, discount }) => {
  return (
    <div className="container-price">
      <Title
        text={`$${(price - (price * discount) / 100).toFixed(2)}`}
        cn="price"
      />
      <Paragraph text={`${discount}%`} cn="price-withbg" />
      <Paragraph text={`$${price.toFixed(2)}`} cn="price-crossed" />
    </div>
  );
};

export default Price;
