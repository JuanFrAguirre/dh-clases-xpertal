const express = require("express");
const app = express();
const PORT = 3030 || process.env.PORT;

app.use(express.static("public"));

app.set("view engine", "ejs");
// app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("pages/index", {
    name: "Pedro",
    age: 13,
    skills: ["correr", "saltar", "comer", "dormir"],
  });
});

app.get("/products", (req, res) => {
  res.render("pages/products");
});

app.get("/products/:productId", (req, res) => {
  let productId = req.params.productId;

  require("fs").readFileSync();

  res.render("pages/product", { productId });
});

app.listen(PORT, () =>
  console.log(`
----------------------
Server listening on PORT ${PORT}`)
);
