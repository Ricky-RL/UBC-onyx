import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Profile, Home, About, Contact } from './components';
import './App.css';
// import { Routes, Route, useNavigate, Router, BrowserRouter, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {

  return (
    <>
    {/* This is the alias of BrowserRouter i.e. Router */}
    <Router>
      <Switch>
        {/* This route is for home component 
        with exact path "/", in component props 
        we passes the imported component*/}
        <Route exact path="/" component={Home} />
          
        {/* This route is for about component 
        with exact path "/about", in component 
        props we passes the imported component*/}
        <Route path="/about" component={About} />
          
          
        {/* If any route mismatches the upper 
        route endpoints then, redirect triggers 
        and redirects app to home component with to="/" */}
        <Redirect to="/" />
      </Switch>
    </Router>
  </>
    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       {/* <Route path="/sfu_twitter_feed" element={<SFUTwitterFeed />} />
    //       <Route path="/road_conditions" element={<RoadCondition />} /> */}
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}



export default App

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
