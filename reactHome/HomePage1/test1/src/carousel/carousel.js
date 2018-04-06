import React, { Component } from 'react';
import './carousel.css';

class Carousel extends Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <h1 className="carousel-title">Properties Nearby</h1>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-img-container">
            <img  className="carousel-img" src="./carouselimg/freestocks.jpg" alt="First slide"/>
            </div>
            <div className="carousel-content">
              <h3>500 Whythe Avenue
              </h3>
              <content>
                Perfect location on the Northside Williamsburg, Brooklyn Waterfront
                scene, my place is a wood beamed classic, with hard wood floors and
                restored original brick wall...
                <a href="http://localhost:8080/"><h6 className="carousel-extend">read more</h6></a>
              </content>
              <div className="carousel-row row">
                <img className="carousel-icon" src="./carouselimg/Homepage V1.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V2.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V3.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V4.bmp"/>
              </div>
              <a href="http://localhost:8080/" className="carousel-extend"><h5>View this Property </h5></a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-container">
              <img className="carousel-img"  src="./carouselimg/andre.jpg" alt="Second slide"/>
            </div>
            <div className="carousel-content">
              <h3>500 Whythe Avenue
              </h3>
              <content>
                Perfect location on the Northside Williamsburg, Brooklyn Waterfront
                scene, my place is a wood beamed classic, with hard wood floors and
                restored original brick wall...
                <a href="http://localhost:8080/"><h6 className="carousel-extend">read more</h6></a>
              </content>
              <div className="carousel-row row">
                <img className="carousel-icon" src="./carouselimg/Homepage V1.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V2.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V3.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V4.bmp"/>
              </div>
              <a href="http://localhost:8080/" className="carousel-extend"><h5>View this Property </h5></a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img-container">
              <img className="carousel-img"  src="./carouselimg/paul.jpg" alt="Third slide"/>
            </div>
            <div className="carousel-content">
              <h3>500 Whythe Avenue
              </h3>
              <content>
                Perfect location on the Northside Williamsburg, Brooklyn Waterfront
                scene, my place is a wood beamed classic, with hard wood floors and
                restored original brick wall...
                <a href="http://localhost:8080/"><h6 className="carousel-extend">read more</h6></a>
              </content>
              <div className="carousel-row row">
                <img className="carousel-icon" src="./carouselimg/Homepage V1.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V2.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V3.bmp"/>
                <img className="carousel-icon" src="./carouselimg/Homepage V4.bmp"/>
              </div>
              <a href="http://localhost:8080/" className="carousel-extend"><h5>View this Property </h5></a>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev carousel-control" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next carousel-control" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
