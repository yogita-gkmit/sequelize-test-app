'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhoneNumber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PhoneNumber.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  PhoneNumber.init(
    {
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      phone_number: { type: DataTypes.STRING, allowNull: false },
      type: {
        type: DataTypes.ENUM,
        values: ['home', 'work', 'mobile'],
        allowNull: false,
        defaultValue: 'mobile',
      },
    },
    {
      sequelize,
      modelName: 'PhoneNumber',
      tableName: 'phone_numbers',
      paranoid: true,
    },
  );
  return PhoneNumber;
};
