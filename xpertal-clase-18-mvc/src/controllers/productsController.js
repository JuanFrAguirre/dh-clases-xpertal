let productList = require("../data/productList");

let productsController = {
  index: (req, res) => {
    res.send("lista de productos");
  },
  getProductById: (req, res) => {
    let id = req.params.id;

    const productoFiltrado = productList.find((product) => product.id == id);

    if (!productoFiltrado) {
      let notFoundMessage = "no se encontro el producto " + id;
      res.render("pages/product", { message: notFoundMessage });
    }

    res.render("pages/product", { product: productoFiltrado });
  },
};

module.exports = productsController;
