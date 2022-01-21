import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function UserIcon() {
    return (
        <div className="UserIcon" style={{fontSize:"1em",color:"white"}}>
            <FontAwesomeIcon icon={ faUser }/>
        </div>
    )
}
export default UserIcon;