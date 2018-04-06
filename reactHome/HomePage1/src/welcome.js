import React, { Component } from 'react';
import './App.css';

class Welcome extends Component {
  render() {
    return (
      <div className="text">
          <h1 className= "header">Welcome to Afito</h1>
          <p className = "para"><b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
          <p>Lorem ipsum dolor sit amet, consextetur adipiscing elit.</p>
          <p> Sed nec faucibus dui, in aliquet arcu. In non tristique ex,</p>
          <p>vel fringilla nisl. Ut blandit arcu sodales purus malesuada, quis dignissim urna pharetra.</p>
      </div>
    );
  }
}

export default Welcome;
