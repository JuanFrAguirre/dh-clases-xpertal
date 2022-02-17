// High Order Functions
console.clear();

let numeros = [100, 2, 4, 8, 10, 35];

// let numeros2 = numeros;

let numeros2 = numeros.map((n) => n);
numeros2.push(999);

// console.log(numeros);
// console.log(numeros2);

let personas = [
  { nombre: "Juan", edad: 15 },
  { nombre: "Aaron", edad: 4 },
  { nombre: "Noel" },
];

let personasFiltradas = personas.filter((persona) => persona.edad);

console.log(personas);
console.log(personasFiltradas);

// map

// filter

// reduce

// forEach
// personas.forEach((a, i) => {
//   console.log(`La persona en la posicion ${i + 1} es ${a.nombre}`);
// });

// let personasConId = personas.map((persona, index) => ({
//   id: index,
//   nombre: persona.nombre,
// }));

// let mascotas = personas.map((persona) => ({ nombreMascota: "xxx" }));

// console.log(personas);
// console.log(personasConId);
// console.log(mascotas);
