module.exports = (sequelize, DataTypes) => {
    const Reserve = sequelize.define("Reserve", {
      reserve: DataTypes.STRING
    }, {
      tableName: "reserves",
      timestamps: false
    });
  
    Reserve.associate = models => {
      Reserve.belongsTo(models.User, { foreignKey: "user_id" });
      Reserve.belongsTo(models.Partner, { foreignKey: "partner_id" });
    };
  
    return Reserve;
  }