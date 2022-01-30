

const products = [
    { id: 1, name: "Caña Pesca Maritima", price: "200",description: "Caña de 3.5 mts de grafico",category:"cañas",stock: 5 },
    { id: 2, name: "Chaleco De Pesca", price: "50",description: "Cheleco de pesca con bolsillos varios",category:"indumentaria",stock: 10 },
    { id: 3, name: "Kit De Anzuelos", price: "125",description: "Kit de Anzuelos varias medidas de 0.5 al 5.5 ",category:"elementos",stock: 15 },
    { id: 4, name: "Plomadas Voladoras", price: "10",description: "Plomada aerodinámica",category:"elementos ",stock: 92},
    { id: 5, name: "Calcos", price: "1000",description: "Un Buen Calco para tu caja de pesca",category:"varios",stock: 25 },
  ];

  export const getMock = new Promise((resolve)=>{
      setTimeout(()=>{
          resolve(products)
      },3000)
  })

  export const getProducts = async ()=>{
      return products
  }