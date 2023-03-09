('use strict');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lawyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Feedback }) {
      Lawyer.hasMany(Feedback, { foreignKey: 'lawyer_id' });
    }
  }
  Lawyer.init(
    {
      full_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      speciality: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      expirience: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      photo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Lawyer',
    }
  );
  return Lawyer;
};
