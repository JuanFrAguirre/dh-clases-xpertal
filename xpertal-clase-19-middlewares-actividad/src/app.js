const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const homeRoute = require("./routes/homeRoute");
const productRoute = require("./routes/productRoute");
const contactRoute = require("./routes/contactRoute");

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use("/", homeRoute);
app.use("/products", productRoute);
app.use("/contact", contactRoute);

app.listen(PORT, () =>
  console.log(`
--------------------
Server running smoothly on PORT ${PORT}
--------------------
`)
);
