module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define("Reserve", {
    reserve: DataTypes.STRING,
    date: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_guest: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    reserve_code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    note_comment: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    review_star: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    reserve_status: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },

    {
      tableName: "reserves",
      timestamps: false,
    });

  Reserve.associate = models => {
    Reserve.belongsTo(models.User, { foreignKey: "user_id" });
    Reserve.belongsTo(models.Partner, { foreignKey: "partner_id" });
  };

  return Reserve;
}