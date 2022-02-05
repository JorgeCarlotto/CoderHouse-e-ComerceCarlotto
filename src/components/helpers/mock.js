

const products = [
    { id: 1, name: "Caña Pesca Marítima", price: "5000",description: "Caña de 3.5 mts de grafico, ideal para la pesca de costa. ",category:"cañas",stock: 5 ,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643539731/Betta%20Fish%20Store/ca%C3%B1a-de-pesca-Maritima-01.webp" },
    { id: 2, name: "Chaleco De Pesca", price: "50",description: "Cheleco de pesca con bolsillos varios",category:"indumentaria",stock: 10,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643540087/Betta%20Fish%20Store/Chaleco-de-pesca-01.jpg" },
    { id: 3, name: "Kit De Anzuelos", price: "125",description: "Kit de Anzuelos varias medidas de 0.5 al 5.5 ",category:"varios",stock: 15 ,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643540203/Betta%20Fish%20Store/kit-Anzuelos-01.jpg" },
    { id: 4, name: "Plomadas Voladoras", price: "10",description: "Plomada aerodinámica",category:"varios ",stock: 92,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1644010462/Betta%20Fish%20Store/Plomada-voladora-3.jpg"},
    { id: 5, name: "Calcos", price: "1000",description: "Un Buen Calco para tu caja de pesca",category:"varios",stock: 25,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643540449/Betta%20Fish%20Store/kit-calcos-01.jpg" },
    { id: 6, name: "Reel Shimano Caius 150 Hg", price: "16.000",description: "Reel Shimano Caius 150Hg Uso:Derecho Izquierdo 4 Rulemanes",category:"reeles",stock: 10,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1643931492/Betta%20Fish%20Store/reel_de_pesca_1.webp" },
    { id: 7, name: "Caña Pesca Rio", price: "3500",description: "Caña de 2.0 mts de grafico, Ideal para pesca de rio. ",category:"cañas",stock: 10 ,img:"https://res.cloudinary.com/ddi161cze/image/upload/v1644000341/Betta%20Fish%20Store/ca%C3%B1a-pesca-rio-1_qoafcf.jpg" },

  ];

  export const getMock = new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(products)
      },2000)
  })

  export const getProducts = async ()=>{
      return products
  }