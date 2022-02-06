import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import useProducts from "../../hooks/useProducts";
import ItemDetail from "../Item/ItemDetail"

const ItemDetailContainer = () => {

  const { products } = useProducts();

  const { id } = useParams();
 
  const [selectedItem, setSelectedItem] = useState(null);

useEffect(()=>{
  if(products.length >0){
    const selectedProduct = products.find((product)=> product.id == id);
    setSelectedItem(selectedProduct);  
  }
},[products]);


  

  return <div>

  <ItemDetail prod = {selectedItem}/>

  </div>


};




export default ItemDetailContainer;


// const ItemDetailContainer = () => {

//   const {id} = useParams();
 
//   // const [selectedItem,setSelectedItem] = useState(null);

//   const [data,setData] = useState([])
//   const [loading,setLoading] = useState(true)

//  useEffect(()=>{
//   getMock
//   .then (res =>setData(res))
//   .catch (err => console.log(err))
//   .finally (()=> setLoading(false)) 
  
//  },[])

// if(loading) {
//   return <h1 className="position-absolute top-50 start-50 translate-middle">Cargando...🐠🐟🐡</h1>
// }

//   return <div class="container pb-4 ">

//     <h1 class="container">Detalle del producto : </h1>
    
//     <ItemDetail prod = {data[4]}/>

//   </div>;
// };

// export default ItemDetailContainer;
