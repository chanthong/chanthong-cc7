const db = require("../models");

const createCategory = async (req, res) => {
    const { type_food } = req.body;
    const newCategory = await db.Category.create({
        type_food,
        part_id: req.user.id
    });

    res.status(201).send(newCategory);
};

const getAllCategories = async (req, res) => {
    const allCategories = await db.Category.findOne({ where: { attributes: [] } });
    // res.status(200).
}

module.exports = {
    createCategory
}