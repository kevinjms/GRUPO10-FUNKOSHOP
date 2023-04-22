'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users_types', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users_types');
  }
};