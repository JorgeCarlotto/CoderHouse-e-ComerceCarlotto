import React from "react";
import { Card, Button,ListGroup,ListGroupItem} from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";




const Item = ({ prod }) => {
  const { name, price, description, category, stock ,img } = prod;

  return (
   
    <Card className="card shadow mb-4" style={{ width: "18rem" }}>
    <Card.Body>
    <Card.Img variant="top" src={img} />
    </Card.Body>
    <Card.Header><Card.Title>{name}</Card.Title></Card.Header>
    <ListGroup className="list-group-flush">
    <ListGroupItem>{description}</ListGroupItem>
    <ListGroupItem>Precio: ${price}</ListGroupItem>
  </ListGroup>
    <Card.Footer>
    <Button variant="primary">Detalle del Producto</Button>
    </Card.Footer>
  </Card>

  );
};

export default Item;
