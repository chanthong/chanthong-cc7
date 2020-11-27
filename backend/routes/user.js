const router = require("express").Router();
const {register, login, getAllUsers} = require("../controllers/user");

router.post("/register", register);
router.post("/login", login);
router.get("/getAllUsers", getAllUsers);//Temporary

module.exports = router;