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
import MoodForm from "./components/MoodForm";
import { BrowserRouter as Router } from "react-router-dom";
<<<<<<< HEAD
import { Link, Outlet } from "react-router-dom";
>>>>>>> 94bf299 (moodFormSol)

<<<<<<< HEAD
function App() {
  let [onLogin, setLogin] = useState({});
||||||| parent of 2f6e4d3 (form done)
import { Link, Outlet } from "react-router-dom";
=======
import { useState } from "react";
>>>>>>> 2f6e4d3 (form done)

const [register, setRegister] = useState([]);
||||||| parent of 94bf299 (moodFormSol)
function App() {
=======
import "./App.css";
>>>>>>> 94bf299 (moodFormSol)

function App() {
  let [moodForm, setMoodForm] = useState({});

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

        <MoodForm onEntryCb={(moodForm) => setMoodForm(moodForm)} />

        <ReactRoutes />
      </div>
    </Router>
  );
}

export default App;
