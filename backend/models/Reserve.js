module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define("Reserve", {
    date: {
      type: DataTypes.STRING
    },
    time: {
      type: DataTypes.STRING,
    },
    number_guest: {
      type: DataTypes.STRING,
    },
    reserve_code: {
      type: DataTypes.STRING,
    },
    note_comment: {
      type: DataTypes.STRING,
    },
    review_star: {
      type: DataTypes.STRING,
    },
    review: {
      type: DataTypes.STRING,
    },
    reserve_status: {
      type: DataTypes.STRING,
    }
  },
    {
      tableName: "reserves",
      timestamps: true,
    });
<<<<<<< HEAD
  Reserve.associate = models => {
  Reserve.belongsTo(models.Promotion, { foreignKey: "promotion_id" });
  Reserve.belongsTo(models.User, { foreignKey: "user_id" });
  Reserve.belongsTo(models.Partner, { foreignKey: "partner_id" });
  };
=======

  Reserve.associate = models => {
    Reserve.belongsTo(models.Promotion, { foreignKey: "promotion_id" });
    Reserve.belongsTo(models.User, { foreignKey: "user_id" });
    Reserve.belongsTo(models.Partner, { foreignKey: "partner_id" });
  };

>>>>>>> b0418c65776d81d364194f24d29dc7c44b427777
  return Reserve;
}