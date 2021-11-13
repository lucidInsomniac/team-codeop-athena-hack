import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import React, {useState} from "react";
import Login from "./components/Login"

function App() {

let [onLogin, setLogin] = useState({});

  return (

    <Router>

    <div className="App">

       <h1>App Name</h1>
      
      <NavBar />

      <ReactRoutes />

      <Login onLoginCb = {onLogin => setLogin(onLogin)}/>


    </div>

    </Router>

  );
}

export default App;
