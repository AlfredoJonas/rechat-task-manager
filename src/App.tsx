import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';
import TaskAppProvider, { TaskContextType } from './context/Task';
import UpdateTask from './pages/UpdateTask/UpdateTask';

// In this way we inject the Task Context Provider to the routes we need to
const BaseRoute = (Element: () => JSX.Element, { initialStateAux=null }: {initialStateAux: TaskContextType | null}) => (
  <TaskAppProvider initialStateAux={initialStateAux}>
    <Element />
  </TaskAppProvider>
);

// For testing purposes we keep abstracted the Render three structure without 
// declare the createRoot method that will break a testing environment
export const App = ({ initialStateAux=null }: {initialStateAux?: TaskContextType | null}) => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index path='home' element={BaseRoute(Home, {initialStateAux})} />
        <Route index path='edit/:taskId' element={BaseRoute(UpdateTask, {initialStateAux})} />
      </Route>
      <Route path='*' element={<Navigate to='/home' />} />
    </Routes>
  </BrowserRouter>
);
