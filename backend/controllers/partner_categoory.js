const db = require("../models");

const getAllPartnerCategory = async (req, res) => {
    try {
        const targetPartnerCategory = await db.Partner_Category.findAll({});
        res.status(200).send(targetPartnerCategory);
    } catch (err) {
        res.status(500).send({ messages: err.messages });
    }
};

const createPartner_Category = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryRelation = await db.Partner_Category.create({
            partner_id: req.user.id,
            category_id: categoryId
        });

        res.status(201).send(categoryRelation);
    } catch (err) {
        res.status(500).send({ messages: err.messages });
    };
}

module.exports = {
    getAllPartnerCategory,
    createPartner_Category
};