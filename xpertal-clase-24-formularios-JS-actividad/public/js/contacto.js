// let getData = async () => {
//   let res = await axios.get("https://jsonplaceholder.typicode.com/users");
//   console.log(res.data);
// };
// getData();

let btn = document.querySelector(".send");
let reload = document.querySelector(".reload");
let form = document.querySelector("form");

let sendData = async (data) => {
  let res = await axios.post("http://localhost:3030/contacto", data);
  console.log("DATA: ", res);
};

reload.addEventListener("click", () => {
  location.reload();
});

btn.addEventListener("click", (e) => {
  console.log(
    localStorage.getItem("username"),
    localStorage.getItem("password")
  );

  if (!form.username.value || !form.password.value) return alert("error!");

  let data = { username: form.username.value, password: form.password.value };

  if (!localStorage.getItem("username") || !localStorage.getItem("password"))
    console.log("nada aun!");

  localStorage.setItem("username", data.username);
  localStorage.setItem("password", data.password);

  // console.log({ username: form.username.value, password: form.password.value });
  // sendData({ username: form.username.value, password: form.password.value });
});
