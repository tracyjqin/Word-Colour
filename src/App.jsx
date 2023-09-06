import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import WordColour from './pages/WordColour';
import Frogger from './pages/Frogger';

function App() {
  return ( 
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/home' element={<Dashboard/>}/>
          <Route path='/wordcolour' element={<WordColour/>}/>
          <Route path='/frogger' element={<Frogger/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;