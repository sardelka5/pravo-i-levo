'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Lawyer }) {
      Feedback.belongsTo(Lawyer, { foreignKey: 'lawyer_id' });
    }
  }
  Feedback.init(
    {
      lawyer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Lawyers',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      accepted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      full_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
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
      modelName: 'Feedback',
    }
  );
  return Feedback;
};
