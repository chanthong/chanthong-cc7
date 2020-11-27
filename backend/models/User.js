module.exports = (sequelize, DataTypes) => {
   const User = sequelize.define("User", {
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            max: 16,
            min: 8
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            max: 16,
            min: 8
         }
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      lname: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            max: 32,
            min: 3
         }
      },
      gender: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true,
         }
      },
      profile_url: {
         type: DataTypes.STRING(6000),
      },
      current_point: {
         type: DataTypes.STRING
      },
      reservation_record: {
         type: DataTypes.STRING
      },
      phone_number: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      birth_date: {
         type: DataTypes.DATE,
         //allowNull: false,
      }

   }, {
      tableName: "users",
   });

   User.associate = models => {
      User.hasMany(models.Reserve, { foreignKey: "user_id" })
   }

   return User;
};

