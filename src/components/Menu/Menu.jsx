import React, { useState } from "react";
import { Link } from "react-router-dom";
import { stack as ReactMenu } from "react-burger-menu";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleStateChange = (state) => {
    setMenuOpen(state.menuOpen);
  };

  return (
    <ReactMenu
      width={"100%"}
      right
      isOpen={menuOpen}
      onStateChange={(state) => handleStateChange(state)}
    >
      <Link onClick={closeMenu} className="menu-item" to="/">
        Home
      </Link>
      <Link onClick={closeMenu} className="menu-item" to="/form">
        Add news
      </Link>
      <Link onClick={closeMenu} className="menu-item" to="/list">
        Read news
      </Link>
    </ReactMenu>
  );
};

export default Menu;
