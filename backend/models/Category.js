module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        type_food: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_partner: {
            type: DataTypes.STRING,
            allowNull: null
        }
    }, {
        tableName: "category",
        timestamps: false,
    });

    Category.associate = models => {
        Category.hasMany(models.Partner_Category, { foreignKey: "category_id" });
    };

    return Category;
};