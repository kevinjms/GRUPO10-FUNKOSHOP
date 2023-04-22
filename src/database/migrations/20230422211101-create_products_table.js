'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      category: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      subcategory: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(11,2),
        allowNull: false,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'categories',
          key:'id'
        }
      },
      subcateogry_id: {
        type: Sequelize.INTEGER,
        references: {
          model:'subcategories',
          key:'id'
        }
      },
     });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
