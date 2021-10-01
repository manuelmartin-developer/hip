import React, { Component } from "react";
import Nav from '../Nav';
import './Header.css';
import { Link } from 'react-router-dom';
import { nameContext } from '../../contexts/nameContext';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <img className="header-logo" src="logo.png" alt="logo" />
        </Link>
        <nameContext.Consumer>
          {({name}) => 
            name ?
              <p className="header-welcome"><span className="header-capital">{name.charAt(0)}</span>{name.slice(1)}</p>
            : <p className="header-welcome"></p>
          }
        </nameContext.Consumer>
        <Nav />
      </header>
    )
  }
}

export default Header;
