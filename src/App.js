import Navbar from './navbar';
import Login from './login';
import Register from './register';
import Forgot from './forgot';
import React from 'react';
import Fackbook from './facebook';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <HashRouter>
        <Navbar />
          <Routes>
          <Route path="/" element={<Fackbook />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
