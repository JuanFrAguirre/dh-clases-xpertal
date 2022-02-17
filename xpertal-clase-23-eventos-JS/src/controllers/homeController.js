let homeController = {
  index: (req, res) => {
    res.render("pages/index", {
      title: "Home",
      links: [
        { title: "Home", url: "/" },
        { title: "Products", url: "/products" },
        { title: "Login", url: "/contact" },
        { title: "SignUp", url: "/contact/register" },
      ],
    });
  },
};

module.exports = homeController;
