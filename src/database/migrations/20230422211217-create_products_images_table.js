'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products_images', { 
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    url: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    isPrimary: {
      type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('products_images');
  }
};