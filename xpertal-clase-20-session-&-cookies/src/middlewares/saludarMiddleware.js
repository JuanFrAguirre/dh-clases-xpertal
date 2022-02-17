module.exports = {
  saludar1: (req, res, next) => {
    console.log("hola 1");
    next();
  },
  saludar2: (req, res, next) => {
    console.log("hola 2");
    next();
  },
  saludar3: (req, res, next) => {
    console.log("hola 3");
    next();
  },
};
