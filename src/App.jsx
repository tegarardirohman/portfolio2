import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project';
import Contact from './pages/Contact';
import CustomCursor from './components/Cursor';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function App() {

  return (

    <>
    <CustomCursor />
    <Home />
    {/* <Router >
      <Navbar />
      <Routes >
        <Route path="/" element= { <Home />} />
        <Route path="/project" element={ <Project /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" elemnt={ <Contact /> } />
      </Routes >
    </Router > */}
    </>
  );
}

export default App
