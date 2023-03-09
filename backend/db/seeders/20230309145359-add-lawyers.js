'use strict';
const { Lawyer } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Lawyer.bulkCreate([]);
  },

  async down(queryInterface, Sequelize) {
    await Lawyer.destroy({ truncate: { cascade: true } });
  },
};
