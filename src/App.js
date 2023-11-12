import Navbar from './navbar';
import Login from './login';
import Register from './register';
import Forgot from './forgot';
import React from 'react';
import Fackbook from './facebook';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import MarkersMap from './useCurrentLocation'
import Price from './price'

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

