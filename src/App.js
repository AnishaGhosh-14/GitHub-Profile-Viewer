import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import ReposPage from './pages/ReposPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:username" element={<UserPage />} />
      <Route path="/:username/repos" element={<ReposPage/>} />
    </Routes>
  </Router>
  );
}

export default App;

