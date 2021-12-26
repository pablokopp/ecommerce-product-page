import React from "react";

const Button = ({ cn, text, handleClick }) => {
  return (
    <button className={cn ? `btn btn-${cn}` : "btn"} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
