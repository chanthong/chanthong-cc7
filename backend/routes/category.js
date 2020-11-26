const router = require("express").Router();
const { createCategory, getAllCategories } = require("../controllers/category");

router.post("/", createCategory);
router.get("/", getAllCategories);

module.exports = router;