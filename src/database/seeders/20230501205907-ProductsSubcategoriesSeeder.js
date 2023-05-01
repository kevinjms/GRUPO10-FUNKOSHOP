'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products_subcategories', [
      {
        name: 'in-sale'
     },
     {
      name: 'visited'
     },
     {
      name: 'none'
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_subcategories', null, {});
  }
};
