import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
// import { CTA, Brand, Navbar, Profile, Home, About, Contact } from './components';
import './App.css';
import { Routes, Route,  Link, BrowserRouter, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";





// function App(){

//   return (
//     <div className="App">
//         <Navbar />
//       {/* </div> */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/UBC-onyx" element={<Home/>}/>
//           <Route path="/UBC-onyx/About" element={<About/>}/>
//           {/* <Route path="/Contact" element={<Contact/>}/> */}
//           {/* <Route path="/sfu_twitter_feed" element={<SFUTwitterFeed />} />
//           <Route path="/road_conditions" element={<RoadCondition />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

const App = () => {

  return (
    <div className="App">
      <HashRouter basename="/">
            <Navbar />
      
        <Routes>
          <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About/>}/>
          {/* <Route path="/Contact" element={<Contact/>}/> */}
          {/* <Route path="/sfu_twitter_feed" element={<SFUTwitterFeed />} />
          <Route path="/road_conditions" element={<RoadCondition />} /> */}
          </Routes> 
      </HashRouter>
    </div>
  );
}



export default App;
