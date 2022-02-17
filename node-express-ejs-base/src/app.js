const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("pages/index", {
    title: "Home",
  });
});

app.get("/products", (req, res) => {
  res.render("pages/products", {
    title: "Products",
  });
});

app.listen(PORT, () =>
  console.log(`
  --------------------
  Server running smoothly on PORT ${PORT}
  --------------------
  `)
);
