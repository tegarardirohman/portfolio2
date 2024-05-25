import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Project from './pages/Project';

function App() {

  return (

    <>
    <Navbar />
    <Router >
      <Routes>
        <Route path="/" element= { <Home />} />
        <Route path="/project" element={ <Project /> } />
      </Routes>
    </Router>
    </>
  )
}

export default App
