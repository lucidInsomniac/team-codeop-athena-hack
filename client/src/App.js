import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import React, {useState} from 'react';
import './App.css';
import Registration from './components/Registration';

function App() {

const [register, setRegister] = useState([]);

  return (

    <Router>

    <div className="App">

       <h1>App Name</h1>
      
      <NavBar />

      <ReactRoutes />
      <Registration onDoneCb={(register) => setRegister(register)} />

    </div>

    </Router>

  );
}

export default App;
