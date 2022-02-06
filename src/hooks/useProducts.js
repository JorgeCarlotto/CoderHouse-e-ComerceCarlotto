import { useEffect, useState } from "react";
import {productsDb} from "../components/helpers/promises"


const useProducts = () => {
  const [products, setProducts] = useState([]); 

  const [loading,setLoading] = useState(true)

  useEffect(() => {
    getProducts()
    .finally (()=> setLoading(false))
  }, []);

  const getProducts = async () => {
    try {
      const result = await productsDb;
      setProducts(result);
    } catch (error) {
      console.log({ error });
    } finally {
      console.log("Finalización del consumo de Db");
    }
  };

  return {
    products,
    loading
  };
};

export default useProducts;
