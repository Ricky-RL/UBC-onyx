import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/ubcea_logo.png';
import './navbar.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <p><a href="#Home">Home</a></p>
          <p><a href="#About">About</a></p>
          <p><a href="#UBCEA">UBC Esports Association</a></p>
          <p><a href="#Contact">Contact Us</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar