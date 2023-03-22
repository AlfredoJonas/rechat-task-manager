import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index path='home' element={<Home />} />
        </Route>
        <Route path='*' element={<Navigate to='/home' />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

