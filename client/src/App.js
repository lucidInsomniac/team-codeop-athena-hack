<<<<<<< HEAD
import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import React, {useState} from 'react';
import './App.css';
import React, {useState} from "react";
import Login from "./components/Login"
import Registration from './components/Registration';


||||||| parent of 94bf299 (moodFormSol)
import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
=======
import ReactRoutes from "./components/ReactRoutes";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
>>>>>>> 94bf299 (moodFormSol)

<<<<<<< HEAD
function App() {
  let [onLogin, setLogin] = useState({});

const [register, setRegister] = useState([]);
||||||| parent of 94bf299 (moodFormSol)
function App() {
=======
import "./App.css";
>>>>>>> 94bf299 (moodFormSol)

function App() {
  return (
    <Router>
      <div className="App">
        <h1>App Name</h1>

<<<<<<< HEAD
    <div className="App">
      
      <NavBar />

      <ReactRoutes />
      <Registration onDoneCb={(register) => setRegister(register)} />

      <Login onLoginCb = {onLogin => setLogin(onLogin)}/>


    </div>
||||||| parent of 94bf299 (moodFormSol)
    <div className="App">

       <h1>App Name</h1>
      
      <NavBar />

      <ReactRoutes />

    </div>
=======
        <NavBar />
>>>>>>> 94bf299 (moodFormSol)

        <ReactRoutes />
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
