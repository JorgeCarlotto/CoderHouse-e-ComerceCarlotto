import React from "react";
import { Card, Button,ListGroup,ListGroupItem } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";


const Item = ({ prod }) => {
  
  return (
    <Card  className="card shadow mb-4 mt-0" style={{ width: '20rem'}}>
  <Card.Img variant="top" src={prod && prod.img} />
  <Card.Body>
    <Card.Title><h2>{prod && prod.name}</h2></Card.Title>
    <Card.Text>
      <h4>Descripción:</h4>
      {prod && prod.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Categoria: {prod && prod.category}</ListGroupItem>
    <ListGroupItem>Stock Disponible: {prod && prod.stock}</ListGroupItem>
    <ListGroupItem>Precio : $ {prod && prod.price}</ListGroupItem>
    <ListGroupItem><ItemCount stock={prod && prod.stock} initial={1}/></ListGroupItem>
    <Button variant="primary">Agregar al Carrito</Button>
  </ListGroup>
  
</Card>
  );
};

export default Item;

