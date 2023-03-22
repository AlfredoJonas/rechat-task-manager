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
  }, [location, navigate]);

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
