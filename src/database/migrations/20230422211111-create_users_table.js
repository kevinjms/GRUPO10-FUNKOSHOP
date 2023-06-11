'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    adress:{
      type:Sequelize.TEXT,
      allowNull: false
    },
    city:{
      type:Sequelize.TEXT,
      allowNull: false
    },
    zipCode:{
      type:Sequelize.INTEGER,
      allowNull: false
    },
    cell:{
      type:Sequelize.INTEGER,
      allowNull: false
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
    types_id: {
      type: Sequelize.INTEGER,
      references: {
        model:'users',
        key:'id'
      }
    }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};