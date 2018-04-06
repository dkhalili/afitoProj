import React, { Component } from 'react';
import Carousel from './carousel/carousel';
import Nav from './nav/nav';
import Footer from './footer/footer.js';
import Content from './content/content.js';


class HomePage extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Content/>
        <Carousel/>
        <Footer/>       
      </div>
    );
  }
}

export default HomePage;
