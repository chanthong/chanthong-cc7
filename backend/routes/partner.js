
const passport = require("passport");
const { register, login, getPartnerById } = require("../controllers/partner");
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.get("/:id", auth, getPartnerById);
router.post("/register", register);
router.post("/login", login);

module.exports = router;