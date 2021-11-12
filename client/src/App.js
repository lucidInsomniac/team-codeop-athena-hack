import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';

function App() {

  return (

    <Router>

    <div className="App">

       <h1>Hi Team!</h1>
      
      <NavBar />

      <ReactRoutes />

    </div>

    </Router>

  );
}

export default App;
