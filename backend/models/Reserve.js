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

  return Reserve;
}