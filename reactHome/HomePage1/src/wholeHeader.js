import React, { Component } from 'react';
import HeaderText from '../src/headerText';
import './App.css';


class WholeHeader extends Component {
  render() {
    return (
      <div className="container whole">
          <div className = "row">
            <div className = "col-md-7 box">
              <HeaderText/>
            </div>
            <div className = "col-md-5 box">
          <img className = "image-one"  src = 'https://static.pexels.com/photos/77931/pexels-photo-77931.jpeg' />
          </div>
          </div>
      </div>
    );
  }
}

export default WholeHeader;
