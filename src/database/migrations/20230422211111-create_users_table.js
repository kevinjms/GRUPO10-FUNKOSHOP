'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    LastName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    avatar: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    type_id: {
      type: Sequelize.INTEGER,
      references: {
        model:'types',
        key:'id'
      }
    }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};