import React from 'react'

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { CTA, Brand, Navbar, Profile } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="profiles">
        <Profile lane = "TOP"
        char="profile_kayle"
        ign="WINNABLEE"/>

        <Profile lane="JUNGLE"
        char="profile_graves"
        ign="Chiv"/>
        
        <Profile lane="MID"
        char="profile_zoe"
        ign="Lexi8878"/>
        
        <Profile lane="ADC"
        char="profile_jinx"
        ign="R1 Chen"/>

<Profile lane="Support"
        char="profile_soraka"
        ign="GorillA"/>

      </div>

    </div>
  )
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
