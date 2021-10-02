import React, { Component } from "react";

class Error extends Component {
  render() {
    return (
      <div className="error">
        <img src="error.gif" alt="error" />
        <h1>404</h1>
        <p>Opss.. that page does not exist</p>
      </div>
    );
  }
}

export default Error;
