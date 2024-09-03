import React from 'react';
import logo from '../assets/images/logo.png';
import Nav from './Nav';

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <Nav />
        </header>
    );
}

export default Header;

