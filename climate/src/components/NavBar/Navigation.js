import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className='row'>
        <div className='brand-column'>
            <a href = "/" className = 'def-color' style={{textDecoration: 'none'}}>CLIMATE POLLUTERS INDEX</a>
        </div>

        <div className='link-column'>
            <NavLink to = "/" activeClassName = "active" className = 'def-color' style={{textDecoration: 'none'}}>POLLUTERS</NavLink>
            <NavLink to = "/stories" activeClassName = "active" className= 'def-color' style={{textDecoration: 'none'}}>STORIES</NavLink>
        </div>
    </div>
  );
}

export default Navigation;