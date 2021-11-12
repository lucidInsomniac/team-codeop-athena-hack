import React from 'react';
import { NavBarData } from './NavBarData';
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return (

        <div className="nav-bar">
            <nav className="navbar">
                <ul className="navbar-nav">

                    {NavBarData.map((item, index) => {


                     
                    })}

                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
