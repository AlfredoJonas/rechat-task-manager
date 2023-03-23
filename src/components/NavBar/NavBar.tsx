import React, { useEffect } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  // For an empty URL and to avoid rendering an empty 
  // navbar we will redirect always to the home page
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
      {/* Outlet helps to render child routes */}
      <Outlet />
    </>
  );
}

export default NavBar;
