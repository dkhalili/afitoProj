import React, { Component } from 'react';
import Welcome from '../src/welcome';
import './App.css';


class WelcomeBar extends Component {
  render() {
    return (
      <div className="container">
          <div className = "row">
          <div className = "col-md-6 box">
              <img className = "image-two"  src = 'http://3b8b9d6479df63f2debd-828cd1388df050e63363b1562769dba1.r93.cf1.rackcdn.com/lps/assets/u/wes49gr-198696-Deluxe-Contemporary-Room-High.jpg' />
          </div>
          <div className = "col-md-6 box">
          <Welcome />
          </div>

          </div>
      </div>
    );
  }
}

export default WelcomeBar;
