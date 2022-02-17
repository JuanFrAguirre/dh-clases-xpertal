let edad = Number(prompt("Que edad tienes?"));
console.log(edad);

if (edad > 18)
  document.querySelector("p.eresMayorDeEdad").innerText = "Eres mayor de 18";

if (edad == 18) alert("Tienes 18 exactamente");

if (edad < 18)
  document.querySelector("p.eresMayorDeEdad").innerText = "Eres menor de 18";
