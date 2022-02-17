let express = require("express");
let router = express.Router();
let contactController = require("../controllers/contactController");
let userMiddleware = require("../middlewares/userMiddleware");

router.get("/", userMiddleware, contactController.contact);
router.get("/login", userMiddleware, contactController.index);
router.get("/register", contactController.getSignUp);

router.post("/", contactController.postLogIn);

router.post("/new", contactController.postSignUp);

module.exports = router;
