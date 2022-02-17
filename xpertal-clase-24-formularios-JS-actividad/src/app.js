const express = require("express");
const app = express();
const PORT = 3030 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => res.render("pages/index"));
app.get("/contacto", (req, res) => res.render("pages/contacto"));

app.post("/contacto", (req, res) => {
  console.log(req.body);
  res.send("todo salio ok!");
});

app.listen(PORT, () =>
  console.log(`
--------------------
Server running smoothly on PORT ${PORT}
--------------------
`)
);
