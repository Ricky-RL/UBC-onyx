import React from "react"
import "./profile.css"
function Profile(props) {
    return (
        <div className="combine">
        <div className="lane">{props.lane}</div>
        <div className={props.char}>
         <div className="ign">{props.ign}</div>  
         
         </div>
    </div>
    )
}

export default Profile