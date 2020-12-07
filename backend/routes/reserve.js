const passport = require("passport");
const { createReserve, deleteReserve, changeReserveStatus, getReserveByPartner } = require("../controllers/reserve");
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.post("/:id", auth, createReserve);
router.delete("/:id", auth, deleteReserve);
router.put("/:id", auth, changeReserveStatus);
router.get("/partner", auth, getReserveByPartner);

module.exports = router;