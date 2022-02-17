function saludar(nombre) {
  return "Hola " + nombre;
}

function despedirse(nombre) {
  return `Adios, ${nombre}`;
}

// module.exports = saludar;
module.exports = { saludar, despedirse };
