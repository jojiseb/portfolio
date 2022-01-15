import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Routes,} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
        {/* Route for Home.js contents */}
        <Route exact path='/' element={<Home/>}>
        </Route>
        {/* Route for About.js contents */}
        <Route path="/about" element={<About/>}>
        </Route>
        {/* Route for Education.js contents */}
        <Route path='/education' element={<Education/>}>
        </Route>
        {/* Route for Skills.js contents */}
        <Route path='/skills' element={<Skills/>}>
        </Route>
        {/* Route for Contact.js */}
        <Route path='/contact' element={<Contact/>}> 
        </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
