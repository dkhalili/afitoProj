import React, { Component } from 'react';
import brand from '../src/brand.png'
import './App.css';


class Navigator extends Component {
  render() {
    return (
      <div className="header clearfix">
              <nav id ="nav-center">
                <ul id="nav-center"className="nav nav-pills float-right">
                  <li className="nav-item">
                    <a id = "active-link" className="nav-link" href=" ">Home <span className="sr-only">(current)</span></a >
                  </li>
                  <li className="nav-item nav-link disabled">
                    Company
                  </li>
                  <li className="nav-item nav-link disabled">
                    About
                  </li>
                  <li className="nav-item nav-link disabled">
                    Contact
                  </li>
                </ul>
              </nav>
              <img src={brand}  id = "nav-brand"className=" navbar-brand d-inline-block "/>
              <hr />
  </div>
    );
  }
}

export default Navigator;
