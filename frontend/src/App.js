import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.scss';
import Home from './Components/Home';
import Howto from './Components/Howto';
import Blog from './Components/Blog';
import Contact from './Components/Contact';

function App() {    
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Howto" element={<Howto/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Blog" element={<Blog/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
