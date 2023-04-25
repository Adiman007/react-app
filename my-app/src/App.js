import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './page/Layout';
import TeamPage from './page/TeamPage';
import RandomPage from './page/RandomPage';
import SearchPage from './page/SearchPage';
import NotFoundPage from './page/NotFoundPage';
import HomePage from './page/HomePage';
import Pokedle from './page/Pokedle';
import './css/App.css';

function App() {
    return (
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/random" element={<RandomPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/pokedle" element={<Pokedle />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
  };
export default App;
