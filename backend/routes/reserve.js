const passport = require("passport");
<<<<<<< HEAD
const { createReserve, deleteReserve, changeReserveStatus, getReserveByPartner } = require("../controllers/reserve");
=======
const { createReserve, deleteReserve, getReserveByPartner, getReserveByUser, changeReserveStatus } = require("../controllers/reserve");
>>>>>>> backend-reserve
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.post("/:id", auth, createReserve);
router.delete("/:id", auth, deleteReserve);
router.put("/:id", auth, changeReserveStatus);
router.get("/partner", auth, getReserveByPartner);
<<<<<<< HEAD
=======
router.get("/getReserveByUser", auth, getReserveByUser);
>>>>>>> backend-reserve

module.exports = router;