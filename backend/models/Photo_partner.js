module.exports = (sequelize, DataTypes) => {
    const Photo_partner = sequelize.define("Photo_partner", {
        image: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: "photo_partners",
        timestamps: false
    });

    Photo_partner.associate = models => {
        Photo_partner.belongsTo(models.Partner, { foreignKey: "partner_id" })
    };

    return Photo_partner;
};