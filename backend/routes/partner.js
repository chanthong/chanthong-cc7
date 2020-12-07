
const passport = require("passport");
const { register, login, getPartnerById, getPartners, deletePartner, getPartnersByDistrict, getPartnerByPrice } = require("../controllers/partner");
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.get("/district", getPartnersByDistrict);
router.get("/Price", getPartnerByPrice);
router.get("/:id", getPartnerById);
router.get("/", getPartners);
router.post("/register", register);
router.post("/login", login);
router.delete("/:id", deletePartner);


module.exports = router;