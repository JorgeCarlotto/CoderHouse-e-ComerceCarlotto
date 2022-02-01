

const products = [
    { id: 1, name: "Caña Pesca Marítima", price: "200",description: "Caña de 3.5 mts de grafico, ideal para la pesca de costa. ",category:"Cañas",stock: 5 ,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643539731/Betta%20Fish%20Store/ca%C3%B1a-de-pesca-Maritima-01.webp" },
    { id: 2, name: "Chaleco De Pesca", price: "50",description: "Cheleco de pesca con bolsillos varios",category:"Indumentaria",stock: 10,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643540087/Betta%20Fish%20Store/Chaleco-de-pesca-01.jpg" },
    { id: 3, name: "Kit De Anzuelos", price: "125",description: "Kit de Anzuelos varias medidas de 0.5 al 5.5 ",category:"Elementos",stock: 15 ,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643540203/Betta%20Fish%20Store/kit-Anzuelos-01.jpg" },
    { id: 4, name: "Plomadas Voladoras", price: "10",description: "Plomada aerodinámica",category:"Elementos ",stock: 92,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643540332/Betta%20Fish%20Store/Plomada-voladora-1.jpg"},
    { id: 5, name: "Calcos", price: "1000",description: "Un Buen Calco para tu caja de pesca",category:"Varios",stock: 25,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643540449/Betta%20Fish%20Store/kit-calcos-01.jpg" },
  ];

  export const getMock = new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(products)
      },2000)
  })

  export const getProducts = async ()=>{
      return products
  }