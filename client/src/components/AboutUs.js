import React from 'react';
import './AboutUs.css'
import house from './Icons/house.svg'
import oncouch from './Icons/oncouch.svg'
import walk from './Icons/walk.svg'


const Aboutus = () => {

    return (

        <div className="about-us">
            <h1 id="about">About Us</h1>
            <div className="card" >
                <img className="card-img-top" src={house} alt="a house"/>
               < div className="card-body">
                  <p className="card-text">When we are isolated for long periods of time, our mental and physical health declines.</p>
               </div>
            </div>   

            <div className="card">
                <img className="card-img-top" src={oncouch} alt="a house"/>
               < div className="card-body">
                  <p className="card-text">Lockdown during COVID-19 has taught us how vulnerable we are to dramatic changes based on internal and external factors.</p>
               </div>
            </div>  
            
            <div className="card" >
                <img className="card-img-top" src={walk} alt="a house"/>
               < div className="card-body">
                  <p className="card-text">Our app aims to help you learn more about, well, YOU. Learn about your habits, mood, and sleep affects you on a daily basis.</p>
               </div>
            </div>                          
        </div>
    );
}

export default Aboutus;
