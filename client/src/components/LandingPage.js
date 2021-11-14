import React from 'react';
import Timer from './Timer'
import './LandingPage.css'

const LandingPage = () => {

    return (

        <div className="landing-page">

            <h1>STOP - INHALE DEEPLY - BREATHE</h1>   

                <Timer className="timer-component"/>

        </div>
    );
}

export default LandingPage;
