import React from "react";
import Item from "../Item/Item"
import CardGroup from 'react-bootstrap/CardGroup'

const ItemList = ( {products} )=>{

    
    return(
        <div className="d-flex justify-content-evenly">
            <CardGroup >
            {products.map((prod)=> <Item key={prod.id} prod={prod} />)}
            
            </CardGroup >
        </div>
    )
}
export default ItemList