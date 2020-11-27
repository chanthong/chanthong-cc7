
const passport = require("passport");
const { register, login, getPartnerById, getPartners, deletePartner } = require("../controllers/partner");
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.get("/:id", auth, getPartnerById);
router.get("/", getPartners);
router.post("/register", register);
router.post("/login", login);
router.delete("/:id", deletePartner);

module.exports = router;