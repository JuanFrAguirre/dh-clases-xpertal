const bcrypt = require("bcryptjs");
const User = require("../models/User");

let superSecurePassword = bcrypt.hashSync("asd123");

let contactController = {
  index: (req, res) => {
    console.log(req.query);

    res.render("pages/contact", {
      title: "Login",
      links: [
        { title: "Home", url: "/" },
        { title: "Products", url: "/products" },
        { title: "Login", url: "/contact" },
        { title: "SignUp", url: "/contact/register" },
      ],
    });
  },
  getSignUp: (req, res) => {
    res.render("pages/register", {
      title: "Sign Up",
      links: [
        { title: "Home", url: "/" },
        { title: "Products", url: "/products" },
        { title: "Login", url: "/contact" },
        { title: "SignUp", url: "/contact/register" },
      ],
    });
  },
  postLogIn: (req, res) => {
    let userData = req.body;
    let users = User.getAllUsers();

    if (
      users.find(
        (user) =>
          user.username == userData.username &&
          bcrypt.compareSync(userData.password, user.password)
      )
    ) {
      res.send("LogIn Exitoso!");
    } else res.send("no existe el usuario");
  },

  postSignUp: (req, res) => {
    let userData = req.body;

    User.createUser(userData);

    res.redirect("/contact/register");
  },
};

module.exports = contactController;
