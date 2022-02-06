import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList'
 import {useParams} from "react-router-dom"
 import useProducts from "../../hooks/useProducts";


const ItemListContainer = () => {

   const {id} = useParams();

   const { products } = useProducts();


  // const [data,setData] = useState([])
  // const [loading,setLoading] = useState(true)

//  useEffect(()=>{
//   getMock
//   .then (res =>setData(res))
//   .catch (err => console.log(err))
//   .finally (()=> setLoading(false)) 

//  },[])

  return <div>

    <div className="title text-center py-5"> 
    <h1>Todos los productos:</h1>  
    </div>
    
    <div>
    {/* { loading ? <h1 class="position-absolute top-50 start-50 translate-middle">
      Cargando...🐠🐟🐡</h1> 
    
    : <ItemList products ={products} id={id}/>} */}
    <ItemList products ={products} id={id}/>
    </div>
    
  </div>;
};

export default ItemListContainer;
