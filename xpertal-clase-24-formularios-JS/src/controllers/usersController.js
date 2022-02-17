let fetch = require("node-fetch");

module.exports = {
  // version con promesas
  // --------------------
  // getAllUsers: (req, res) => {
  //   let url = "https://jsonplaceholder.typicode.com/users";

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {res.send(data)})
  //     .catch((error) => res.send(error));
  // },
  // --------------------
  // version con async/await
  // --------------------
  getAllUsers: async (req, res) => {
    let url = "https://jsonplaceholder.typicode.com/users";

    let response = await fetch(url);
    let data = await response.json();
    res.send(data);
  },
};
