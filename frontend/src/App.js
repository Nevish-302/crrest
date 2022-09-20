import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.scss';
import Home from './Components/Home';
import Howto from './Components/Howto';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp'

function App() {    
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Howto" element={<Howto/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/SignUp" element={<SignUp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
