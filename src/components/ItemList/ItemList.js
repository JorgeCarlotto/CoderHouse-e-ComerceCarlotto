import React from "react";
import Item from "../Item/Item"
import CardGroup from 'react-bootstrap/CardGroup'



const ItemList = ( {products , id} )=>{

    console.log({id})
const filterProducts = products.filter(({ category }) => category === id);
console.log(filterProducts)
    return(
        <div className="d-flex justify-content-evenly">
            <CardGroup >
            {!id && products.map((prod)=> <Item key={prod.id} prod={prod} />)}
            
            {id && filterProducts.map((prod)=><Item key={prod.id} prod={prod} />)}
            </CardGroup >
        </div>
    )
}
export default ItemList