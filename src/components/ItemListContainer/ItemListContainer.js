import React, { useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
// import useProducts from "../../hooks/useProducts";
import {collection,getDocs} from 'firebase/firestore'

import { db } from '../firebase/config'


const ItemListContainer = () => {

  const [loading,setLoading] = useState(true)
  const { id } = useParams();

  // const { products, loading } = useProducts();

  const productRef = collection(db,'items')
  getDocs(productRef)
  .then((prod)=>console.log(prod))
  .finally(()=>(setLoading(false)))

  return (
    <div>
      <div className="title text-center py-1">
        <h1>Bienvenidos a nuestra tienda:</h1>
      </div>

      <div className="title text-center py-5">
        <h2>Nuestros Productos:</h2>
      </div>

      <div>
        {loading ? (
          <h1 class="mt-0 vh-50 row justify-content-center align-items-center">
            Cargando...🐠🐟🐡
          </h1>
        ) : (
          <ItemList products={productRef} id={id} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
