import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
function CarWidget() {
    return (
        <div className="CarWidget" style={{fontSize:"1.2em",color:"white"}}>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    )
}
export default CarWidget;