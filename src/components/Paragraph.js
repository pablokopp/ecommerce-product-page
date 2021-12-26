import React from "react";

const Paragraph = ({ text, cn }) => {
  return (
    <p className={cn ? `paragraph paragraph-${cn}` : "paragraph"}>{text}</p>
  );
};

export default Paragraph;
