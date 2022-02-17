let express = require("express");
let router = express.Router();
let contactController = require("../controllers/contactController");
let userMiddleware = require("../middlewares/userMiddleware");

router.get("/", userMiddleware, contactController.index);

module.exports = router;
