const db = require('../models');
const { register } = require("../controllers/partner");
const router = require("express").Router();

router.post("/register", register);

module.exports = router;