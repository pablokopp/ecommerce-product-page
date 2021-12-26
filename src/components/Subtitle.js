import React from "react";

const Subtitle = ({ text, cn }) => {
  return (
    <h4 className={cn ? `subtitle subtitle-${cn}` : "subtitle"}>{text}</h4>
  );
};

export default Subtitle;
