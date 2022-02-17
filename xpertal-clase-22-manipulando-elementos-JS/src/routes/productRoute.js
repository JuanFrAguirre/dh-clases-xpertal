let express = require("express");
let router = express.Router();
let productsController = require("../controllers/productsController");

router.get("/", productsController.index);
router.get("/:id", productsController.getProductById);

module.exports = router;
