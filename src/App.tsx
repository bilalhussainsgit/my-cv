import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import CvPage from './pages/CvPage';
import EntryPage from './pages/EntryPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/entry" element={<EntryPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
