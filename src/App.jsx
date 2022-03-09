import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import FavList from './components/FavList';
import Navbar from './components/Navbar';
export default function App() {
  return (
    <>
    <center>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/F" element={<FavList />} />
      </Routes>
    </center>
    </>
  )
}
