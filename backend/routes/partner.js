<<<<<<< HEAD
const db = require('../models');
const { register } = require("../controllers/partner");
=======

const {register} = require("../controllers/partner");
>>>>>>> 75f358e842a44911d0e43efc96a23d0338127766
const router = require("express").Router();

router.post("/register", register);

module.exports = router;