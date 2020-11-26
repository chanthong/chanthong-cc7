const db = require("../models");

const createCategory = async (req, res) => {
    try {
        const { type_food } = req.body;
        const newCategory = await db.Category.create({
            type_food,
            partner_id: req.user.id
        });

        res.status(201).send(newCategory);
    } catch (err) {
        res.status(500).send({ messages: err.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const allCategories = await db.Category.findAll({
        });
        res.status(200).send(allCategories);
    } catch (err) {
        res.status(500).send({ messages: err.message });
    }
}

module.exports = {
    createCategory,
    getAllCategories
}