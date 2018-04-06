import React, { Component } from "react";
import { browserHistory } from 'react-router';

export default class Home extends Component {
  componentDidMount() {
    browserHistory.push('/');
  }
  render() {
    return (
      <div id="home">

<div className="container-fluid">
  <div className="row block home-block">

      <div className="col-md-7">
        <div className="home-content">
          <h1>Find a Rental Right Near Campus</h1>
          <p>View Homes, Easily Chat With Tenants and Get the Keys to your New Humble Abode - Its as easy as that! Bad Credit? No Problem! with Afito credit and bank records arent necessary. No, its not too good to be true - Its Afito!</p>
          <p>What College/Univeristy do you Attend?</p>
          <input type="text" placeholder="" className="college-search"/>

        </div>  
      </div>


      <div className="col-md-5">
        <div className="home-image1">
          <img src="https://oneclassblog.com/wp-content/uploads/2018/02/Kiev-Apt-MARTIN-architects-1.jpg" height="450px"/>
        </div>            
      </div>

  </div>






    <div className="row block home-block">


      <div className="col-md-5">
        <div className="home-image2">
          <img src="http://www.neighbourhoodclub.net/wp-content/uploads/2017/08/INterior-designs.jpg" height="450px"/>
        </div>            
      </div>

      <div className="col-md-7">
        <div className="home-content">
          <h1>Welcome to Afito</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>

        </div>  
      </div>
    </div>



    <div className="row block home-block">


      <div className="col-md-5">
        <div className="home-image3">
          <img src="http://www.arlington-tx.gov/codecompliance/wp-content/uploads/sites/36/2016/05/Tenants-Rights-03.jpg" height="450px"/>
        </div>            
      </div>

      <div className="col-md-7">
        <div className="home-content">
          <h1>Tenants</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <button className="btn btn-primary">Start as a tenant</button>

        </div>  
      </div>
    </div>



    <div className="row block home-block">



      <div className="col-md-7">
        <div className="home-content">
          <h1>Landlords</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <button className="btn btn-primary">Start as a landlord</button>

        </div>  
      </div>




      <div className="col-md-5">
        <div className="home-image4">
          <img src="http://www.arlington-tx.gov/codecompliance/wp-content/uploads/sites/36/2016/05/Tenants-Rights-03.jpg" height="450px"/>
        </div>            
      </div>


    </div>



</div>





      </div>
    );
  }
}