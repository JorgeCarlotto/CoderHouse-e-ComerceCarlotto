import React from "react";
import Item from "../Item/Item"
import CardGroup from 'react-bootstrap/CardGroup'



const ItemList = ( {products , id} )=>{

    
const filterProducts = products.filter(({ category }) => category === id);

    return(
        <div className="d-flex justify-content-evenly">
            <CardGroup >
            {!id && products.map((prod)=> <Item key={prod.id} prod={prod} id={id} />)}
            
            {id && filterProducts.map((prod)=><Item key={prod.id} prod={prod} id={id}  />)}
            </CardGroup >
        </div>
    )
}
export default ItemList