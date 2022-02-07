import React from "react";
import { Card,ListGroup,ListGroupItem,Button} from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = ({prod}) => {

  
  const { id,name, price, description,img } = prod;

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
      
    <Button variant="secondary"><Link style={{ color: "white", textDecoration: "none"}} to={`/item/${id}`}>Detalle del Producto</Link></Button>
    </Card.Footer>
  </Card>

  );
};

export default Item;


