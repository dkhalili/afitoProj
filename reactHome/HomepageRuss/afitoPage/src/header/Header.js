import React, { Component } from 'react';
import './css/Header.css';
import NavComponent from '../nav/Nav';

class HeaderComponent extends Component{
    render(){
        return (
            <header className='HeaderContainer HeaderBackground'>
                <div className='HeaderCopyColor'>415-321-2828</div>
                <div className='HeaderCopyColor'>Support Center</div>
                <div className='HeaderCopyColor'>Log In</div>
                <div className='HeaderCopyColor'>Sign Up</div>
            </header>
          
        );
    }
}

export default HeaderComponent;
    