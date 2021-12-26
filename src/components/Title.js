import React from "react";

const Title = ({ text, cn }) => {
  return <h1 className={cn ? `title title-${cn}` : "title"}>{text}</h1>;
};

export default Title;
