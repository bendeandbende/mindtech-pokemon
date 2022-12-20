import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import 'nes.css/css/nes.min.css';
import './App.css';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/'}>Home</NavLink>
      </nav>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/pokemon/:pokemon'} element={<Pokemon />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
