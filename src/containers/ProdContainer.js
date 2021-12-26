import BuyContainer from "./BuyContainer";
import InfoContainer from "./InfoContainer";
import Price from "./Price";
import React from "react";
import { prodData } from "../data/prodData";

const ProdContainer = () => {
  return (
    <section className="container-prod">
      <InfoContainer
        company={prodData.company}
        name={prodData.name}
        desc={prodData.desc}
      />
      <Price price={prodData.price} discount={prodData.discount} />
      <BuyContainer stock={prodData.stock} prodData={prodData} />
    </section>
  );
};

export default ProdContainer;
