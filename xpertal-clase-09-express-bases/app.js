const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;

// app.get("/", (req, res) => res.send("hola"));
app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./views/index.html"))
);
app.get("/test", (req, res) =>
  res.sendFile(path.join(__dirname, "./views/test1.html"))
);

app.listen(PORT, () => console.log("El servidor esta corriendo"));
