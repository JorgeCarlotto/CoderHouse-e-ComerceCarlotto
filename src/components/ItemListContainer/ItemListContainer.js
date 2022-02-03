import React from 'react';
import{ useState } from 'react';
import { useEffect } from 'react';
import {getMock} from '../helpers/mock'
import ItemList from '../ItemList/ItemList'




const ItemListContainer = ({ greting}) => {

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

 useEffect(()=>{
  getMock
  .then (res =>setData(res))
  .catch (err => console.log(err))
  .finally (()=> setLoading(false)) 

 },[])




  return <div>

    <h1>{greting}</h1>

    { loading ? <h1 class="position-absolute top-50 start-50 translate-middle">Cargando...🐠🐟🐡</h1> : <ItemList products ={data}/>}
   
    
    
   

  </div>;
};

export default ItemListContainer;
