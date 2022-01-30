import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";


const Item = ({ prod }) => {
  const { name, price, description, category, stock ,img } = prod;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {description}
            <br />
            Categoria:{category}
        </Card.Text>
        <Card.Text>
            {description}
        </Card.Text>
        <Card.Text>
            ${price}
        </Card.Text>


        <Button variant="primary">Detalle del Producto</Button>
      </Card.Body>
      <ItemCount stock={stock} initial={1}/>
    </Card>
  );
};

export default Item;
