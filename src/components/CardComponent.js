//import "./App.css";

import logo from '../../src/logo.svg';
import React from "react";

class CardComponent extends React.Component {
    constructor()
    {
        super()
    }

  render() {
    return (
        <div className="card">
        <div> <img src={this.props.logo} className="App-logo2" alt="logo" /></div>
            <div>Hold on, Help is on the way !</div>
            <div>{this.props.children}</div>
      </div>
    )
  }
}

export default CardComponent