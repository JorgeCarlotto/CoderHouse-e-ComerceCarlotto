import React from 'react';
import{ useState } from 'react';
import { useEffect } from 'react';
import {getMock} from '../helpers/mock'
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'




const ItemListContainer = ({ greting}) => {

  const {id} = useParams();
  
  

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

 useEffect(()=>{
  getMock
  .then (res =>setData(res))
  .catch (err => console.log(err))
  .finally (()=> setLoading(false)) 

 },[])

  return <div>

    <div className="title text-center py-5"> <h1>Todos los productos:</h1>  </div>
    
    <div>
    { loading ? <h1 class="position-absolute top-50 start-50 translate-middle">Cargando...🐠🐟🐡</h1> : <ItemList products ={data}/>}
    
    </div>
    
  </div>;
};

export default ItemListContainer;
