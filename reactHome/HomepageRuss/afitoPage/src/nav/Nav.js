import React, { Component } from 'react';
import './css/Nav.css';
import Logo from './image/afitoLogo.png';

class NavComponent extends Component{
    render(){
        return (
            <div className='NavContainer NavBackground'>
              <div className='logo-container'><img src={Logo}/></div>
              <div className='NavCopyColor'><a href={'/home/'}>Home </a></div>
                <div className='NavCopyColor'><a href={'/rental/'}>Rental</a></div>
                <div className='NavCopyColor'><a href={'/signin/'}>Sign In</a></div>
                <div className='NavCopyColor'><a href={'/about/'}>About Us</a></div>
            </div>
        );
    }
}

export default NavComponent;
    