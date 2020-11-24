const passport = require("passport");
const { createReserve, deleteReserve} = require("../controllers/reserve");
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.post("/", auth, createReserve);
router.delete("/:id", auth, deleteReserve);

module.exports = router;