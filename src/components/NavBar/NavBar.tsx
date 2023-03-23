import React, { useEffect } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <div className='nav-bar primary-bg-color primary-text'>
        <span>Task Management</span>
        <span className='nav-bar-arrow'>&gt;</span>
        <span className='nav-bar-arrow'>
          {location.pathname.split("/")[1]}
        </span>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
