module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define("Reserve", {
    date: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_guest: {
      type: DataTypes.STRING,
      // unique: true,
      allowNull: false,
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

  Reserve.associate = models => {
    Reserve.belongsTo(models.Promotion, { foreignKey: "promotion_id" });
    Reserve.belongsTo(models.User, { foreignKey: "user_id" });
    Reserve.belongsTo(models.Partner, { foreignKey: "partner_id" });
  };

  return Reserve;
}