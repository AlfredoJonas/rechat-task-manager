import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index path='home' element={<Home />} />
      </Route>
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  </BrowserRouter>
);
