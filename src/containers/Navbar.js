import React, { useState } from "react";

import Button from "../components/Button";
import CartWidget from "../components/CartWidget";
import Image from "../components/Image";
import Menu from "./Menu";
import logo from "../data/images/logo.svg";
import menuIcon from "../data/images/icon-menu.svg";
import profile from "../data/images/image-avatar.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      {showMenu && <Menu handleClick={() => setShowMenu(false)} />}
      <Button
        cn="navbar-menu"
        text={<Image imgSrc={menuIcon} cn="navbar-menu" />}
        handleClick={() => setShowMenu(true)}
      />
      <Image imgSrc={logo} cn="navbar-logo" />
      <CartWidget />
      <Image imgSrc={profile} cn="navbar-profile" />
    </nav>
  );
};

export default Navbar;
