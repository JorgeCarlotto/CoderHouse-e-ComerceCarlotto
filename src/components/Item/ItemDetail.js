import React from "react";
import { Card, Button,ListGroup,ListGroupItem } from "react-bootstrap";



const Item = ({ prod }) => {
  const { name, price, description, category, stock ,img } = prod;

  return (
    <Card  className="card shadow mb-4" style={{ width: '30rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title><h2>{name}</h2></Card.Title>
    <Card.Text>
      <h4>Descripción:</h4>
    {description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Categoria: {category}</ListGroupItem>
    <ListGroupItem>Stock Disponible: {stock}</ListGroupItem>
    <ListGroupItem>Precio : $ {price}</ListGroupItem>
    
  </ListGroup>
  
  <Button variant="primary">Agregar al Carrito</Button>
</Card>
  );
};

export default Item;
