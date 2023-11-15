import Navbar from './components/navbar';
import Login from './pages/login';
import Register from './pages/register';
import Forgot from './pages/forgot';
import React from 'react';
import Fackbook from './pages/facebook';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import MarkersMap from './pages/useCurrentLocation'
import Price from './pages/price'
import './core-ui/App.css';

function App() {
  return (
      <HashRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<Fackbook />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Map" element={<MarkersMap/>} />
          <Route path="/Price" element={<Price/>} />
        </Routes>
      </HashRouter>
  );
}

export default App;

