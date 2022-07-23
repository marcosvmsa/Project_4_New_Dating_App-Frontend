import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './assets/CSS/App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Onboarding from './pages/Onboarding';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/onboarding" element={<Onboarding/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
