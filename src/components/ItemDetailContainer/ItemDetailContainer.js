import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ItemDetail from "../Item/ItemDetail";

const ItemDetailContainer = () => {
  const { products, loading } = useProducts();

  const { id } = useParams();

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((product) => product.id == id);
      setSelectedItem(selectedProduct);
    }
  }, [products]);

  return (
    <div>
      <div className="title text-center py-10 mt-0">
        {" "}
        <h1>Detalle del Producto:</h1>{" "}
      </div>
      <div className=" mt-0 vh-100 row justify-content-center align-items-center">
        {loading ? (
          <h1 className="mt-0 vh-50 row justify-content-center align-items-center">
            Cargando Producto...🐠🐟🐡
          </h1>
        ) : (
          <ItemDetail prod={selectedItem} />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
