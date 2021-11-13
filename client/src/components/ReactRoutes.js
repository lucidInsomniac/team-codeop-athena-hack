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

const ReactRoutes = () => {

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

            </Routes>
        
        </div>
    
       
    )
};

export default ReactRoutes;    