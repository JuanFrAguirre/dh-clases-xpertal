const { urlencoded } = require("express");
const express = require("express");
const { CLIENT_RENEG_LIMIT } = require("tls");
const app = express();
const PORT = 3030 || process.env.PORT;

app.use(express.static("public"));
{
  // app.use(express.urlencoded({ extended: true }));
  // app.use(express.json());
}

app.get("/", (req, res) => {
  res.sendFile(require("path").join(__dirname, "/views/index.html"));
});

app.listen(PORT, () => console.log("Server running on PORT " + PORT));
