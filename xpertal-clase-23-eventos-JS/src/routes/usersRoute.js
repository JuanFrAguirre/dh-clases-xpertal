let express = require("express");
let router = express.Router();
let usersController = require("../controllers/usersController");

router.get("/", usersController.getAllUsers);

module.exports = router;
