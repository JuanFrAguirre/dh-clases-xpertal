let express = require("express");
let router = express.Router();
let contactController = require("../controllers/contactController");

router.get("/", contactController.index);

module.exports = router;
