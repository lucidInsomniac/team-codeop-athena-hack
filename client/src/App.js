import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import React, {useState} from 'react';
import './App.css';
import React, {useState} from "react";
import Login from "./components/Login"
import Registration from './components/Registration';



function App() {
  let [onLogin, setLogin] = useState({});

const [register, setRegister] = useState([]);

  return (

    <Router>

    <div className="App">
      
      <NavBar />

      <ReactRoutes />
      <Registration onDoneCb={(register) => setRegister(register)} />

      <Login onLoginCb = {onLogin => setLogin(onLogin)}/>


    </div>

    </Router>

  );
}

export default App;
