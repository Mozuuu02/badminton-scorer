import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerInput from './components/PlayerInput';
import MatchPage from './components/MatchPage';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PlayerInput />} />
        <Route path="/matchpage" element={<MatchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
