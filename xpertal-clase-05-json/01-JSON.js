// JSON
console.clear();

// utilizar fs para leer archivos (necesario para leer nuestros JSON)

// ----------------------
let data = [
  {
    nombre: "Juan",
    apellido: "Aguirre",
    edad: 25,
    esMayorDeEdad: false,
  },
  {
    nombre: "Jose",
    apellido: "Lopez",
  },
  {
    nombre: "Mario",
    apellido: "Caliguy",
  },
  {
    nombre: "Paco",
    apellido: "Gomez",
  },
];

let dataConvertidaAJson = JSON.stringify(data);
// console.log(dataConvertidaAJson);
// console.log("------------");
// console.log(JSON.parse(dataConvertidaAJson));

// ----------------------------------------------------------------------------

const fs = require("fs");

const agregarPersonaAlJson = (nombre, apellido) => {
  let JSONData = JSON.parse(fs.readFileSync("./json.json", "utf-8"));
  JSONData.data.push({ nombre: nombre, apellido: apellido });
  fs.writeFileSync("./json.json", JSON.stringify(JSONData, null, 2));
};

// guardar

(dato) =>  leer los datos originales y sumarle lols nuevos 


// escribir

(datos) => escribir el json


// leerPorEstado

(estado) => leer los datos y filtrar segun el estado, retornar el nuevo array filtrado







agregarPersonaAlJson("Diego", "Villarreal");
agregarPersonaAlJson("Martin", "Martinez");
agregarPersonaAlJson("Guillermo", "Anzures");

// naguive
// dilan
// guille
// freddy
