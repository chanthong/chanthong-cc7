module.exports = (sequelize, DataTypes) => {
    const Partner_Category = sequelize.define("Partner_Category", {}, {
        tableName: "partner_category",
        timestamps: false
    });

    Partner_Category.associate = models => {
        Partner_Category.belongsTo(models.Partner, { foreignKey: "partner_id" });
        Partner_Category.belongsTo(models.Category, { foreignKey: "category_id" });
    };

    return Partner_Category;
};
