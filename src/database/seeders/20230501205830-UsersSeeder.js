'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
    {
      firstName: 'Rodolfo',
      LastName: 'Lopez',
      email: 'rodolfo.lopez@gmail.com',
      password: '12345678',
      avatar: 'imagen.jpg',
      types_id: 1
    },
    {
      firstName: 'Sofia',
      LastName: 'Garcia',
      email: 'sofia.garcia@gmail.com',
      password: '87654321',
      avatar: 'imagen.jpg',
      types_id: 2
    },
    {
      firstName: 'Maria',
      LastName: 'Rodriguez',
      email: 'maria.rodriguez@gmail.com',
      password: 'hola1234',
      avatar: 'imagen.jpg',
      types_id: 2
    },
    {
      firstName: 'Juan',
      LastName: 'Cruz',
      email: 'juan.cruz@gmail.com',
      password: '1234hola',
      avatar: 'imagen.jpg',
      types_id: 2
    },
    {
      firstName: 'Fernando',
      LastName: 'Gomez',
      email: 'fernando.gomez@gmail.com',
      password: 'chau1234',
      avatar: 'imagen.jpg',
      types_id: 2
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
