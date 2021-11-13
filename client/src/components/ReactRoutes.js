<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Dashboard from './Dashboard';
import EditProfile from './EditProfile';
import LandingPage from './LandingPage';
import Login from './Login';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

import { Route, Routes } from 'react-router-dom';
||||||| parent of 94bf299 (moodFormSol)
import React from 'react';
import CalendarSummary from './CalendarSummary';
import EditProfile from './EditProfile';
import LandingPage from './LandingPage';
import Login from './Login';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import { Route, Routes } from 'react-router-dom';
=======
import React from "react";
import CalendarSummary from "./CalendarSummary";
import EditProfile from "./EditProfile";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import MoodForm from "./MoodForm";
<<<<<<< HEAD
import { Link, Outlet } from "react-router-dom";
>>>>>>> 94bf299 (moodFormSol)
||||||| parent of 2f6e4d3 (form done)
import { Link, Outlet } from "react-router-dom";
=======
>>>>>>> 2f6e4d3 (form done)
||||||| deebd90
import React from 'react';
import CalendarSummary from './CalendarSummary';
import EditProfile from './EditProfile';
import LandingPage from './LandingPage';
import Login from './Login';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import { Route, Routes } from 'react-router-dom';
=======
import React from "react";
import CalendarSummary from "./CalendarSummary";
import EditProfile from "./EditProfile";
import LandingPage from "./LandingPage";
import Login from "./Login";
import ProfilePage from "./ProfilePage";
import Registration from "./Registration";
import { Route, Routes } from "react-router-dom";
import MoodForm from "./MoodForm";
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7

const ReactRoutes = () => {
<<<<<<< HEAD
  return (
    <div className="react-routes">
      <Routes>
        <Route path="/" element={<LandingPage />} />

<<<<<<< HEAD
    return (
        
        <div className="react-routes">

            <Routes>

                <Route path="/" element={<LandingPage />} />

                <Route path="/about-us" element={<AboutUs />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/register" element={<Registration />} />

                <Route path="/contact-us" element={<ContactUs />} />
                
                <Route path="/profile" element={<ProfilePage />} />
                
                <Route path="/edit-profile" element={<EditProfile />} />
                
                <Route path="/dashboard" element={<Dashboard />} />
||||||| deebd90
=======
  return (
    <div className="react-routes">
      <Routes>
        <Route path="/" element={<LandingPage />} />
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7

<<<<<<< HEAD
            </Routes>
        
        </div>
    
       
    )
||||||| parent of 94bf299 (moodFormSol)
    return (
        
        <div className="react-routes">

            <Routes>

                <Route path="/" element={<LandingPage />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/register" element={<Registration />} />
                
                <Route path="/profile" element={<ProfilePage />} />
                
                <Route path="/edit-profile" element={<EditProfile />} />
                
                <Route path="/calendar" element={<CalendarSummary />} />

            </Routes>
        
        </div>
    
       
    )
=======
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/calendar" element={<CalendarSummary />} />

        <Route path="/moodform" element={<MoodForm />} />
      </Routes>
    </div>
  );
>>>>>>> 94bf299 (moodFormSol)
||||||| deebd90
    return (
        
        <div className="react-routes">

            <Routes>

                <Route path="/" element={<LandingPage />} />
                
                <Route path="/login" element={<Login />} />
                
                <Route path="/register" element={<Registration />} />
                
                <Route path="/profile" element={<ProfilePage />} />
                
                <Route path="/edit-profile" element={<EditProfile />} />
                
                <Route path="/calendar" element={<CalendarSummary />} />

            </Routes>
        
        </div>
    
       
    )
=======
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Registration />} />

        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/calendar" element={<CalendarSummary />} />

        <Route path="/moodform" element={<MoodForm />} />
      </Routes>
    </div>
  );
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7
};

export default ReactRoutes;
