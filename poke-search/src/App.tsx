import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import 'nes.css/css/nes.min.css';
import './App.css';
import Pokemon from './containers/Pokemon';
import PokemonList from './containers/PokemonList';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/'}>Home</NavLink>
      </nav>
      <Routes>
        <Route path={'/'} element={<PokemonList />}></Route>
        <Route path={'/pokemon/:pokemon'} element={<Pokemon />}></Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
