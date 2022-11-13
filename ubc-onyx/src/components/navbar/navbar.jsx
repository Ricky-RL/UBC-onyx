import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/ubcea_log.png';
import './navbar.css';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar