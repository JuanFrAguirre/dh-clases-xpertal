let productList = require("../data/productList");

let productsController = {
  index: (req, res) => {
    res.render("pages/products", {
      title: "Products",
      links: [
        { title: "Home", url: "/" },
        { title: "Products", url: "/products" },
        { title: "Contact", url: "/contact" },
      ],
    });
  },
  getProductById: (req, res) => {
    let id = req.params.id;

    const productoFiltrado = productList.find((product) => product.id == id);

    if (!productoFiltrado) {
      let notFoundMessage = "no se encontro el producto " + id;
      res.render("pages/product", { message: notFoundMessage });
    } else {
      res.render("pages/product", { product: productoFiltrado });
    }
  },
};

module.exports = productsController;
