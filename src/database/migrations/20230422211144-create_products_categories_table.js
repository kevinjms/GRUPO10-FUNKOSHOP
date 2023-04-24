'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products_categories', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    products_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'products',
        key: 'id'
      }
  }
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products_categories');
  }
};