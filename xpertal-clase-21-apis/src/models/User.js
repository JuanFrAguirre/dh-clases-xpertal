const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

const User = {
  fileLocation: path.resolve(__dirname, "..", "data", "users.json"),

  getAllUsers: () => {
    return JSON.parse(fs.readFileSync(User.fileLocation, "utf-8"));
  },

  createUser: (userData) => {
    let users = User.getAllUsers();

    let password = bcrypt.hashSync(userData.password, 10);

    let newUser = {
      ...userData,
      password,
    };

    users.push(newUser);
    fs.writeFileSync(User.fileLocation, JSON.stringify(users, null, 2));
  },
};

module.exports = User;
