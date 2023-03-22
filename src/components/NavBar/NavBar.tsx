import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  return (
    <>
      <div className='navbar'>
        <span>Task Manager</span>
        <span className='navbar-arrow'>&gt;</span>
        <span className='navbar-arrow'>
          {location.pathname.split("/")[1]}
        </span>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
