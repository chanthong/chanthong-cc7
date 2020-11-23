const { DATE } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("Partner", {
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

    model.associate = (models) => {

    };

    return model;
}