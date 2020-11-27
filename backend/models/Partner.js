module.exports = (sequelize, DataTypes) => {
    const Partner = sequelize.define("Partner", {
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        restaurant_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email_address: {
            type: DataTypes.STRING
        },
        price_range: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        partners_picture: {
            type: DataTypes.STRING
        },
    }, {
        tableName: "partners"
    });

    Partner.associate = (models) => {
        Partner.hasMany(models.Reserve, { foreignKey: "partner_id" });
        Partner.hasMany(models.Partner_Category, { foreignKey: "partner_id" });
    };

    return Partner;
}