import React from 'react';
import{ useState } from 'react';
import { useEffect } from 'react';
import {getMock} from '../helpers/mock'
import ItemDetail from '../Item/ItemDetail';
import {useParams} from "react-router-dom"





const ItemDetailContainer = () => {

  const {id} = useParams();

  const [selectedItem,setSelectedItem] = useState(null);

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

 useEffect(()=>{
  getMock
  .then (res =>setData(res))
  .catch (err => console.log(err))
  .finally (()=> setLoading(false)) 
  
 },[])




if(loading) {
  return <h1 class="position-absolute top-50 start-50 translate-middle">Cargando...🐠🐟🐡</h1>
}

  return <div class="container pb-4 ">

    <h1 class="container">Detalle del producto : </h1>
    
    <ItemDetail prod = {data[0]}/>

  </div>;
};

export default ItemDetailContainer;