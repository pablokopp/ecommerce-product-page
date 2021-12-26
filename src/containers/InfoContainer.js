import Paragraph from "../components/Paragraph";
import React from "react";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

const InfoContainer = ({ company, name, desc }) => {
  return (
    <div className="container-info">
      <Subtitle text={company} cn="info" />
      <Title text={name} cn="info" />
      <Paragraph text={desc} cn="info" />
    </div>
  );
};

export default InfoContainer;
