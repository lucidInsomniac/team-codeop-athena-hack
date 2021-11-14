import React, {useContext} from 'react';
import logo_black from './Icons/logo_black.svg'
import context from "../context";


const NavBar = () => {
    let {user, doLogoutCb} = useContext(context);
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

                {user ? (<div>
                    <p style={{ cursor: 'pointer' }} onClick={doLogoutCb}>Logout</p>
                </div> )
                : (null)}
            </a>
            
            <h1>Face-It</h1>
            
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
                {user && 
                    <><li class="nav-item">
                                <a class="nav-link" href="/profile">Profile</a>
                            </li><li class="nav-item">
                                    <a class="nav-link" href="/moodform">How are you feeling?</a>
                                </li></>
                    
                }
                {/* <li class="nav-item">
                    <a class="nav-link" href="/profile">Profile</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="/moodform">How are you feeling?</a>
                </li> */}

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