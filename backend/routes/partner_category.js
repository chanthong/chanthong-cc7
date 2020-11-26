const router = require("express").Router();
const { getAllPartnerCategory, createPartner_Category } = require("../controllers/partner_categoory");
const passport = require("passport");

const auth = passport.authenticate("jwt-auth", { session: false });

router.get("/", getAllPartnerCategory);
router.post("/:categoryId", auth, createPartner_Category);

module.exports = router;