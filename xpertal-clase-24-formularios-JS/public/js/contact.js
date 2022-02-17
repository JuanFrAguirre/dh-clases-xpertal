let form = document.querySelector("form");

let username = document.querySelector("#username");
let password = document.querySelector("#password");
let errors = [];
let errorsHTML = document.querySelector(".errorsHTML");
let usernameError = document.querySelector("#usernameError");

let inputsArray = [username, password];

inputsArray.forEach((input) => {
  input.addEventListener("blur", () => {
    if (!input.value)
      errorsHTML.innerHTML = `<p>No puedes dejar el ${input.id} vacio</p>`;
    if (input.value.length < 4 || input.value.length > 12)
      console.log("debes ingresar entre 4 y 12 letras");
  });
});

username.addEventListener("keyup", (e) => {
  let { key } = e;
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (numbers.includes(Number(key)))
    console.log("ERROR: Numeros no permitidos");
});

// username.addEventListener("blur", () => {
//   if (!username.value) {
//     errorsHTML.innerHTML += "<p>No puedes dejar el nombre de usuario vacio</p>";
//   } else {
//     console.log(username.value);
//   }
// });

// password.addEventListener("blur", () => {
//   if (!password.value) {
//     errorsHTML.innerHTML += "<p>No puedes dejar la contraseña vacia</p>";
//   } else {
//     console.log(password.value);
//   }
// });
