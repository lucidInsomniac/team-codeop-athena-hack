
import React, {useState} from 'react';
import Dashboard from './Dashboard';
import EditProfile from './EditProfile';
import LandingPage from './LandingPage';
import Login from './Login';
import ProfilePage from './ProfilePage';
import Registration from './Registration';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { Route, Routes } from 'react-router-dom';
import MoodForm from "./MoodForm";
//import { Link, Outlet } from "react-router-dom";




const ReactRoutes = () => {

  let [onLogin, setLogin] = useState({});
  let [moodForm, setMoodForm] = useState({});
  const [register, setRegister] = useState([]);


    return (
        
        <div className="react-routes">

            <Routes>

                <Route path="/" element={<LandingPage />} />

                <Route path="/about-us" element={<AboutUs />} />
                
                <Route path="/login" element={<Login  onLoginCb = {onLogin => setLogin(onLogin)}/>} />
                
                <Route path="/register" element={<Registration onDoneCb={(register) => setRegister(register)}/>} />

                <Route path="/contact-us" element={<ContactUs />} />
                
                <Route path="/profile" element={<ProfilePage />} />
                
                <Route path="/edit-profile" element={<EditProfile />} />
                
                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/moodform" element={<MoodForm onEntryCb={(moodForm) => setMoodForm(moodForm)}/>} />
              
            </Routes>
        
        </div>
    
       
    


  );

};

export default ReactRoutes;