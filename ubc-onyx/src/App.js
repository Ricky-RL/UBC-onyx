import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar, Profile, Home, About, Contact } from './components';
import './App.css';
import { Routes, Route, useNavigate, Router, BrowserRouter, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";




function App(){

  return (
    <div className="App">
        <Navbar />
      {/* </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/UBC-onyx" element={<Home />} />
          <Route path="/UBC-onyx/About" element={<About/>}/>
          {/* <Route path="/sfu_twitter_feed" element={<SFUTwitterFeed />} />
          <Route path="/road_conditions" element={<RoadCondition />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <b>UBC ONYX </b>
//       <b>Test</b>
//     </div>
//   );
// }

// export default App;
