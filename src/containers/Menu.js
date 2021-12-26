import Button from "../components/Button";
import React from "react";
import { linksData } from "../data/linksData";

const Menu = ({ handleClick }) => {
  return (
    <div className="container-menu">
      <div className="container-menu-sub">
        <Button text="x" cn="menu-close" handleClick={handleClick} />
        <ul>
          {linksData.map((link) => {
            const { text, url } = link;
            return (
              <li>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
