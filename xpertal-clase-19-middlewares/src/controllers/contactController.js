let contactController = {
  index: (req, res) => {
    console.log(req.query);

    res.render("pages/contact", {
      title: "Contact",
      links: [
        { title: "Home", url: "/" },
        { title: "Products", url: "/products" },
        { title: "Contact", url: "/contact" },
      ],
    });
  },
};

module.exports = contactController;
