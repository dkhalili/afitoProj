import React, { Component } from 'react';
import './App.css';

class HeaderText extends Component {
  render() {
    return (
      <div>
        <div>
        <h1>Find a Rental Right Near Campus</h1>
        <p>View Homes, Easily Chat With Tenants and Get the Keys to your New Humble
Abode - Its as easy as that! Bad credit? No Problem! with Afito credit scores
and bank records arent necessary. No, its not to good to be true - Its Afito!</p>
        </div>
        <div className="dropdown">
        <label>What College/University do you Attend?</label>
        <button id = "dropdown-button"className="dropdown-toggle btn btn-outline-secondary" type="button" data-toggle="dropdown">

        <span className="caret"> Choose your school</span>

        </button>
        <ul className="dropdown-menu">
       <li>NJIT</li>
       <li>PRIENCETON</li>
      <li>IOWA</li>
  </ul>
</div>
      </div>
    );
  }
}

export default HeaderText;
