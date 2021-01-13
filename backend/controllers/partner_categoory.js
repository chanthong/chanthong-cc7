const { response } = require("express");
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
        // const partnerId = req.params.partnerId;
        const categoryRelation = await db.Partner_Category.create({
            partner_id: req.user.id,
            category_id: categoryId
        });

        res.status(201).send(categoryRelation);
    } catch (err) {
        res.status(500).send({ message: err.message });
    };
};

// เรียก category ไปใส่ card เรียกที่เพราะ จะได้ดูจำนวนร้านค้าได้
const getThemeCategory = async (req, res) => {
    try {
        const allTheme = await db.Partner_Category.findAll({
            include: {
                model: db.Category
            },
            group: ['category_id'],
            attributes: ['category_id', [db.sequelize.fn('COUNT', 'partner_id'), 'cnt']]
        });

        res.status(200).send({ allTheme })
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message });
    }
};

const getThemeBySection = async (req, res) => {
    try {
        const { myTheme } = req.params;
        const targetTheme = await db.Partner_Category.findAll({
            include: [{
                model: db.Category,
                where: { type_Restaurant: myTheme }
            },
            {
                model: db.Partner,
                attributes: ['district', 'restaurant_name', 'partners_picture'],
                include: [
                    {
                        model: db.Reserve,
                        attributes: ['id']
                    }
                ]
            }]
        });

        res.status(200).send({ targetTheme })
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: err.message })
    };
};

module.exports = {
    getAllPartnerCategory,
    createPartner_Category,
    getThemeCategory,
    getThemeBySection
};