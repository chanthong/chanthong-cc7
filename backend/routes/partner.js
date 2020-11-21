<<<<<<< HEAD

const {register} = require("../controllers/partner");
=======
const db = require('../models');
const { register } = require("../controllers/partner");
>>>>>>> 865b2df4a0b74b16323bfc0de608453fb686421b
const router = require("express").Router();

router.post("/register", register);

module.exports = router;