// Spread Operator
console.clear();

let personas = [
  { nombre: "Juan", edad: 15 },
  { nombre: "Aaron", edad: 4 },
  { nombre: "Noel" },
];

let personas2 = [...personas];

// Rest Operator

let sumar = (nombre, ...nums) => console.log(nombre, nums);

sumar("Juan", 9, 67, 54, 3, 2, 100);
