'use strict';
const { Feedback } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Feedback.bulkCreate([]);
  },

  async down(queryInterface, Sequelize) {
    await Feedback.destroy({ truncate: { cascade: true } });
  },
};
