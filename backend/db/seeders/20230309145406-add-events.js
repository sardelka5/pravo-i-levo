'use strict';
const { Event } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Event.bulkCreate([]);

  },

  async down(queryInterface, Sequelize) {
    await Event.destroy({ truncate: { cascade: true } });
  },
};
