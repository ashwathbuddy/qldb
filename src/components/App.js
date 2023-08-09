import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login';
import AddNewBatch from './AddNewBatch';
import UpdateBatch from './UpdateBatch';
import CreateReport from './CreateReport';
import RawBiomass from './RawBiomass';
import Extraction from './Extraction';
import Logistics from './Logistics';
import Products from './Products';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/add" element={<AddNewBatch />} />
      <Route path="/update" element={<UpdateBatch />} />
      <Route path="/report" element={<CreateReport />} />
      <Route path="/rawbiomass" element={<RawBiomass />} />
      <Route path="/extraction" element={<Extraction />} />
      <Route path="/logistics" element={<Logistics />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
