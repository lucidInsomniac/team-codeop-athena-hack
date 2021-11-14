import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import React, {useState} from 'react';
import './App.css';
import Local from "./helpers/Local";
import FrontAuth from './helpers/FrontAuth';
import { Navigate } from 'react-router-dom';
import context from "./context";


function App() {
  
  const [user, setUser] = useState(Local.getUser());
  async function doLogin(onLogin) {
    let response = await FrontAuth.loginUser(onLogin.username, onLogin.password);
    if (response.ok) {
        Local.saveUserInfo(response.data.token, response.data.user);
        setUser(response.data.user.userid);
        console.log(response.data.user.userid);
        window.location = "/"
     
    } else {
        console.log("Login failed")
    }
   
  }

 

  function doLogout() {
    Local.removeUserInfo();
    setUser(null);
    //history.push('/');
}
    let contextobj = {user, doLoginCb: doLogin, doLogoutCb: doLogout}
    return (
        
        <context.Provider value={contextobj}>
        <Router>
          <div className="App">
           

          <NavBar />


          <ReactRoutes 
     
          />
          </div>
    </Router>
    </context.Provider>
  );
}

export default App;