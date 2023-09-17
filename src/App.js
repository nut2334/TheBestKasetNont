import Navbar from './navbar';
import Login from './login';
import Register from './register';
import Forgot from './forgot';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
