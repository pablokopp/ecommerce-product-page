import React from "react";

const Image = ({ imgSrc, cn }) => {
  return <img src={imgSrc} className={cn ? `img img-${cn}` : "img"} alt={cn} />;
};

export default Image;
