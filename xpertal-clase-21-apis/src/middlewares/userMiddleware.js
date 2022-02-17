module.exports = (req, res, next) => {
  if (req.query.username && req.query.username === "noelG") {
    console.log("Usuario autorizado");
    res.send("datos personalizados");
  } else next();
};
