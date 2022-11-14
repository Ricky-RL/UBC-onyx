import React from "react"
import "./profile.css"
function Profile(props) {
    return (
        <div className="combine">
        <div className="lane">{props.lane}</div>
    <div className={props.char}>   
         <h4 className="ign">{props.ign}</h4>  
         
         </div>
    </div>
    )
}

export default Profile