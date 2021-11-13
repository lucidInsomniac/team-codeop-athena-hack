import ReactRoutes from "./components/ReactRoutes";
import NavBar from "./components/NavBar";
import MoodForm from "./components/MoodForm";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {
  let [moodForm, setMoodForm] = useState({});

  return (
    <Router>
      <div className="App">
        <h1>App Name</h1>

        <NavBar />

        <MoodForm onEntryCb={(moodForm) => setMoodForm(moodForm)} />

        <ReactRoutes />
      </div>
    </Router>
  );
}

export default App;
