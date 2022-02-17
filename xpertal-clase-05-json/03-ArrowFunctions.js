// funciones declaradas
function saludar(nombre) {
  return `Hola ${nombre}`;
}

// funciones expresadas
const saludar1 = function () {
  console.log("Hola!");
};

// Arrow Functions
const saludar2 = (nombre) => `Hola ${nombre}`;

// console.log(saludar("Juan"));
// saludar1();
console.log(saludar2("Dilan"));

(nombre) => console.log(`Hola ${"Dilan"}`);
