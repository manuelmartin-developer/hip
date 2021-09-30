import React, { useContext } from "react";
import { nameContext } from "../../contexts/nameContext";
import { Link } from "react-router-dom";
import Nav from '../Nav'

const Header = () => {

  const { name } = useContext(nameContext);

  return (
    <header className="header">
      <Link to="/">
          <img className="header-logo" src="logo.png" alt="logo" />
        </Link>

      {name ?
      <p className="header-welcome"><span className="header-capital">{name.charAt(0)}</span>{name.slice(1)}</p>
       : <p className="header-welcome"></p>
      }
      <Nav />
    </header>
  );
};

export default Header;
