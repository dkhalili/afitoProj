import React, { Component } from "react";

export default class App extends Component {

  render() {
    return (
      
      <div>
        <p>TEST...</p>
        {this.props.children}
        
      </div>
    );
  }
}