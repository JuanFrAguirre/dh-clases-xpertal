let homeController = {
  index: (req, res) => {
    res.render("pages/index", {
      title: "Home App",
      links: [
        { title: "Home", url: "/" },
        { title: "Products", url: "/products" },
        { title: "Contact", url: "/contact" },
      ],
    });
  },
};

module.exports = homeController;
