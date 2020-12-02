module.exports = (sequelize, DataTypes) => {
  const Reserve = sequelize.define("Reserve", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number_guest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reserve_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note_comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review_star: {
      type: DataTypes.STRING
    },
    review: {
      type: DataTypes.STRING
    },
    reserve_status: {
      type: DataTypes.STRING
    },
    partner_id: {
      type: DataTypes.STRING
    }
  },

    {
      tableName: "reserves",
      timestamps: true,
    });

  return Reserve;
}