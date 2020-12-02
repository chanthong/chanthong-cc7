module.exports = (sequelize, DataTypes) => {
    const User_Role = sequelize.define("User_Role", {
        role: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: "user_role",
        timestamps: false
    });


    return User_Role;
};