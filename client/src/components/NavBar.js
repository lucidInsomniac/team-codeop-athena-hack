import React from 'react';
import logo_black from './Icons/logo_black.svg'

const NavBar = () => {
    
    return (

        <div className="nav-bar">
            <nav className="navbar sticky-top navbar-light bg-light">
            <a class="navbar-brand" href="/">
                <img src={logo_black} 
                  width="50" 
                  height="50" 
                  class="d-inline-block align-top" 
                  id="logo"
                  alt="" 
                />
            </a>
            
            <h1>Name of App</h1>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav">

                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/about-us">About Us</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/contact-us">Contact Us</a>
                </li>

                </ul>

            </div>
            </nav>
        </div>
    );
}

export default NavBar;
