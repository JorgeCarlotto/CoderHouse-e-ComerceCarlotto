import { useEffect, useState } from "react";
import {productsDb} from "../components/helpers/promises"


const useProducts = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    getProducts();
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
  };
};

export default useProducts;
