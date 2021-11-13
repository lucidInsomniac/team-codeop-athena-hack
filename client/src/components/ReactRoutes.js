
import React, {useState, useEffect} from 'react';
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

  const [calendarEntries, setCalendarEntries] = useState([]);
  useEffect(() => {
    entriesByUser();

}, []);

// const entriesByUser = () => {
//   fetch("/moodform/1")
//     .then(response => response.json())
//     .then(entries => {
//       setCalendarEntries(entries);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

async function entriesByUser() {
  try {
    let response = await fetch ('/moodform/1');
    if(response.ok) {
      let data = await response.json();
      setCalendarEntries(data);
    }
  } catch(err) {
    console.log(`Server error: ${err.message}`);
  }
}

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
                
                <Route path="/dashboard" element={<Dashboard calendarEntries={calendarEntries}/>} />

                <Route path="/moodform" element={<MoodForm onEntryCb={(moodForm) => setMoodForm(moodForm)}/>} />
              
            </Routes>
        
        </div>
    
       
    


  );

};

export default ReactRoutes;
