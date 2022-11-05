import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Routes>
      <Route path="/linktree" element={<Home />} />
      <Route path="/linktree/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
