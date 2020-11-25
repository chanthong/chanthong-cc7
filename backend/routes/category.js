const router = require("express").Router();
const { createCategory, getAllCategories } = require("../controllers/categoty");
const passport = require("passport");

const auth = passport.authenticate("jwt-auth", { session: false });

router.post("/", auth, createCategory);
router.get("/",  getAllCategories);

module.exports = router;