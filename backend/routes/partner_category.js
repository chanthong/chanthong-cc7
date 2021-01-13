const router = require("express").Router();
const { getAllPartnerCategory, createPartner_Category, getThemeCategory, getThemeBySection } = require("../controllers/partner_categoory");
const passport = require("passport");

const auth = passport.authenticate("jwt-auth", { session: false });

router.get("/", getAllPartnerCategory);
router.get("/allTheme", getThemeCategory);
router.get("/myTheme/:myTheme", getThemeBySection);
// router.post("/:categoryId/:partnerId", createPartner_Category);
router.post("/:categoryId", auth, createPartner_Category);

module.exports = router;