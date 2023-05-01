'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users_types', [
    {
      name: 'ADMIN'
    },
    {
      name: 'USER'
    },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users_types', null, {});
     
  }
};
