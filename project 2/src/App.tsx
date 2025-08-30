import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import SearchPage from './pages/SearchPage';
import ComparePage from './pages/ComparePage';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-cyan-50 to-pink-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:countryCode" element={<CountryPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/compare" element={<ComparePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;