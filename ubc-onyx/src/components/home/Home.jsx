import React from 'react'
import Profile from "./../profile/Profile"
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

function Home () {
  return (
    <div className="App">
      
      <div className="profiles">
        <div className="child">
          <Profile lane="TOP"
            char="profile_kayle"
            ign="WINNABLEE" />
        </div>

        <div className="child">
          <Profile lane="JUNGLE"
            char="profile_graves"
            ign="Chiv" />
        </div>

        <div className="child">
          <Profile lane="MID"
            char="profile_zoe"
            ign="Lexi8878" />
        </div>

        <div className="child">
          <Profile lane="ADC"
            char="profile_jinx"
            ign="R1 Chen" />
        </div>

        <div className="child">
          <Profile lane="Support"
            char="profile_nautilus"
            ign="GorillA" />
        </div>

        <div className="child">
          <Profile lane="TOP"
          char="profile_gragas"
          ign="U NO MOM"/>
        </div>

        <div className="child">
          <Profile lane="ADC"
          char="profile_lucian"
          ign="Shellybeans"/>
          
          </div>


        <div className="child">
        <Profile lane="Coach"
        char="profile_trundle"
        ign="Julian"/>
        </div>
      </div>




    </div>
  )
}

export default Home;