<<<<<<< HEAD
<<<<<<< HEAD
import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import React, {useState} from 'react';
import './App.css';
import React, {useState} from "react";
import Login from "./components/Login"
import Registration from './components/Registration';
||||||| deebd90
import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
=======
import ReactRoutes from "./components/ReactRoutes";
import NavBar from "./components/NavBar";
import MoodForm from "./components/MoodForm";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import "./App.css";
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7


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
<<<<<<< HEAD
  let [onLogin, setLogin] = useState({});
||||||| parent of 2f6e4d3 (form done)
import { Link, Outlet } from "react-router-dom";
=======
import { useState } from "react";
>>>>>>> 2f6e4d3 (form done)
||||||| deebd90
=======
  let [moodForm, setMoodForm] = useState({});
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7

<<<<<<< HEAD
const [register, setRegister] = useState([]);
||||||| parent of 94bf299 (moodFormSol)
function App() {
=======
import "./App.css";
>>>>>>> 94bf299 (moodFormSol)

function App() {
  let [moodForm, setMoodForm] = useState({});

  return (
||||||| deebd90
  return (

=======
  return (
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7
    <Router>
      <div className="App">
        <h1>App Name</h1>

<<<<<<< HEAD
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
||||||| deebd90
    <div className="App">

       <h1>App Name</h1>
      
      <NavBar />
=======
        <NavBar />
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7

<<<<<<< HEAD
      <ReactRoutes />

    </div>
=======
        <NavBar />
>>>>>>> 94bf299 (moodFormSol)
||||||| deebd90
      <ReactRoutes />

    </div>
=======
        <MoodForm onEntryCb={(moodForm) => setMoodForm(moodForm)} />
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7

<<<<<<< HEAD
        <MoodForm onEntryCb={(moodForm) => setMoodForm(moodForm)} />

        <ReactRoutes />
      </div>
    </Router>
||||||| deebd90
    </Router>

=======
        <ReactRoutes />
      </div>
    </Router>
>>>>>>> 2f6e4d34811d8aeceed56ac0f427e0cfad6112d7
  );
}

export default App;
