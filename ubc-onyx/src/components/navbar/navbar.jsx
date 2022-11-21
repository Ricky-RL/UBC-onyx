import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
// import { Link } from 'react-router-dom';

import { Routes, Route, useNavigate, Router, BrowserRouter, Link, createBrowserRouter, RouterProvider, HashRouter } from 'react-router-dom';

import logo from '../../assets/ubcea_logo.png';
import './navbar.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';


const Menu = () => (
  <>

    {/* <p><a href="#About">About</a></p> */}
    <p>
      <a href="https://www.ubcesports.ca/" target="_blank" rel="noreferrer">
        <Button className="btn">UBCEA</Button>
      </a>
    </p>

    {/* <Link to="../cta/CTA.jsx">

      <Button className="btn">
        Road Conditions
      </Button>
      <br></br>

    </Link> */}
    <div>
      {/* <HashRouter> */}
        <Link to="/">
          <Button onClick="refreshPage()" className="Home">
            Home
          </Button>

        </Link>
        <Link to="/About">
          <Button onClick="refreshPage()" className="About">
            About
          </Button>
        </Link>
        {/* <Link to="/Contact">
  <Button onClick = "refreshPage()" className="Contact">
  Contact Us 
</Button>
</Link> */}
      {/* </HashRouter> */}
    </div>
  </>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="navbar-menu-container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

export default Navbar