// import React from "react";


// export const AboutUs = () => {

//     return (
//         <div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="https://res.cloudinary.com/ddi161cze/image/upload/v1646396038/Betta%20Fish%20Store/pescador-prueba-mono-goma-tienda-pesca-anzuelos-chucherias_266732-23239_nr4kqx.webp" class="img-fluid rounded-start" alt="tata img"/>
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div>

//     )
// }

import React from 'react';
import { Card } from 'react-bootstrap';

const AboutUs = ()=>{

return(
    <>
<Card className="bg-dark text-white">
  <Card.Img src="https://res.cloudinary.com/ddi161cze/image/upload/v1646396038/Betta%20Fish%20Store/pescador-prueba-mono-goma-tienda-pesca-anzuelos-chucherias_266732-23239_nr4kqx.webp" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title><h1>Somos Betta Fishing Store</h1></Card.Title>
    <Card.Text>
    Nacimos en el año 1960, hasta el día de hoy nuestro principal objetivo es llevarte los mejores productos
     del mercado para tus aventuras. Soñamos seguir creciendo y expandirnos a todo el país. 
    </Card.Text>
    <Card.Text>Nuestro Objetivo es darte el mejor servicio.</Card.Text>
  </Card.ImgOverlay>
</Card>  </>
)
    
}

export default AboutUs;