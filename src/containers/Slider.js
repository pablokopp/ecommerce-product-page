import React, { useState } from "react";
import { imgData, imgThumbData } from "../data/imgData";

import Button from "../components/Button";
import Image from "../components/Image";
import imgNext from "../data/images/icon-next.svg";
import imgPrev from "../data/images/icon-previous.svg";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const sliderImg = imgData[index];
  const checkIndex = (n) => {
    if (n > imgData.length - 1) {
      return 0;
    }
    if (n < 0) {
      return imgData.length - 1;
    }
    return n;
  };
  return (
    <div className="container-slider">
      <Image imgSrc={sliderImg} cn="slider" />
      <Button
        cn="slider-prev"
        text={<Image imgSrc={imgPrev} cn="btn-slider" />}
        handleClick={() => setIndex(checkIndex(index - 1))}
      />
      <Button
        cn="slider-next"
        text={<Image imgSrc={imgNext} cn="btn-slider" />}
        handleClick={() => setIndex(checkIndex(index + 1))}
      />
    </div>
  );
};

export default Slider;
