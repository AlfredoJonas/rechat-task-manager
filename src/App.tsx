import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import TaskAppProvider from './context/Task';

const BaseRoute = (Element: () => JSX.Element) => (
  <TaskAppProvider>
    <Element />
  </TaskAppProvider>
);

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index path='home' element={BaseRoute(Home)} />
      </Route>
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  </BrowserRouter>
);
