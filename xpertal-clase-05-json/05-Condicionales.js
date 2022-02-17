// Condicionales
console.clear();

// if --> switch

// let nombre = "Juan";

let saludar = (nombre) => {
  // if (nombre === 'Juan') return `Hola, ${nombre}`
  // if (nombre === 'Sol') return `${nombre} querida, como estas?`
  // if (nombre === 'Tomas') return `Que onda, ${nombre}?`
  let saludo;

  return saludo;
};

// ternario

let edad = 18;
let esMayorDeEdad;

// if (edad >= 18) console.log("Es mayor de edad");
// else console.log("No es mayor de edad");

// console.log(edad >= 18 ? "Es mayor de edad" : "No es mayor de edad");

// nullish coalescing vs OR vs AND

// let var1;
// let var2 = "Juan";

// console.log(var1 || var2);

// booleans
// true false

// truthy
//      string con contenido
//      numeros distintos de 0
//      objeto literal (indistintamente de si estan vacios o no)
//      array (indistintamente de si estan vacios o no)

// falsy
//      string vacio
//      numero 0 y -0
//      null
//      undefined
//      NaN

let objetito = {
  nombres: [],
  apellido: "",
};

if (objetito.nombres.length) console.log("TRUE!");
else console.log("FALSE!");

// console.log(objetito.nombres.length);

// let persona = {
//   nombre: "Juan",
//   apellido: "Aguirre",
//   edad: 26,
//   pertenencias: ["reloj", "campera"],
//   //   pertenencias: [],
// };

// let explicar = () => {
//   if (persona.pertenencias) return "funciono";
//   else return "no funciono";
// };

// console.log(explicar());
