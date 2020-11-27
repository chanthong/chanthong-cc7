module.exports = (sequelize, DataTypes) => {
    const Promotion = sequelize.define("Promotion", {
        promotion_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        date_expire: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "promotions",
        timestamps: false
    });

    Promotion.associate = models => {
        Promotion.hasMany(models.Photo_partner, { foreignKey: "partner_id" });
        Promotion.hasMany(models.Reserve, { foreignKey: "promotion_id" });
        Promotion.belongsTo(models.Partner, { foreignKey: "partner_id" });
    };

    return Promotion;
};