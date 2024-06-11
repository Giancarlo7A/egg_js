// function calcularVelocidad() {
//   const distancia = 10;
//   const tiempo = 2;
//   const velocidad = distancia / tiempo;
//   console.log("La velocidad del móvil es " + velocidad);
// }

// calcularVelocidad();
// calcularVelocidad();
// calcularVelocidad();

const calcularVelocidad = (distancia, tiempo) => {
  const velocidad = distancia / tiempo;
//   console.log("La velocidad del móvil es " + velocidad);  //solo se comenta esto
  return velocidad;
};

const velocidad1 = calcularVelocidad(10, 2);
console.log("La velocidad de Juana es " + velocidad1);

const velocidad2 = calcularVelocidad(20,2);
console.log("La velocidad de Pedro es " + velocidad2);

const velocidad3 = calcularVelocidad(30,2);
console.log("La velocidad de Julio es " + velocidad3);
