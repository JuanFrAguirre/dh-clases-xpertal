let form = document.querySelector("form");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(username.value, password.value);
});

let palabra = "";
username.addEventListener("keyup", (e) => {
  // palabra += e.key;
  // console.log(palabra);
  console.log(username.value);
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("hola");
// });
