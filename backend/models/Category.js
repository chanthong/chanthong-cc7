module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        type_food: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "category",
        timestamps: false
    });

    Category.associate = models => {
        Category.belongsTo(models.Partner, { foreignKey: "partner_id" });
    };

    return Category;
}