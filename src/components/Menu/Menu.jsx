import React, { Component } from "react";
import { Link } from "react-router-dom";
import { stack as ReactMenu } from "react-burger-menu";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <ReactMenu
        width={"100%"}
        right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
          Home
        </Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/form">
          Add news
        </Link>
        <Link onClick={() => this.closeMenu()} className="menu-item" to="/list">
          Read news
        </Link>
      </ReactMenu>
    );
  }
}

export default Menu;
