import React, { Component } from 'react';
import './content.css';
import card from './cardData';
import Card from './card';

class Content extends Component {
  render() {
    return (
        <div > 
         <Card card={card} />
            <div className="row welcome">
                <div className="col-6 col-6 left">
                    <img className="content-welcome-img rounded-circle" src="./carouselimg/sea.jpg"/>
                </div>
                <div className="col-6 col-6 right">
                 <h1>Welcome to Afito</h1>
                 <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed nec faucibus dui, in aliquet arcu. In non tristique ex,vel fringilla nisl. Ut blandit arcu sodales purus malesuada, quis dignissim urna pharetra.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-6 left-img">
                    <img className="content-tenants-img" src="./carouselimg/house.jpg"/>
                </div>
                <div className="col-6 col-6 right">
                    <h2>Tenatnts</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed nec faucibus dui, in aliquet arcu. In non tristique ex,vel fringilla nisl. Ut blandit arcu sodales purus malesuada, quis dignissim urna pharetra.
                    </p>
                    <a className="content-detail">start as a rentant</a>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-6 left">
                    <h2>Renters</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed nec faucibus dui, in aliquet arcu. In non tristique ex,vel fringilla nisl. Ut blandit arcu sodales purus malesuada, quis dignissim urna pharetra.
                    </p>
                    <a className="content-detail">start as a render</a>
                </div>
                <div className="col-6 col-6 right-img">
                    <img className="content-renters-img" src="./carouselimg/house.jpg"/>
                </div>
            </div>
        </div>
    );
  }
}

export default Content;