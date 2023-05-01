'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products_images', [
      {
      url: 'Albert.png',
      isPrimary: true,
    },
    {
      url: 'Batman.png',
      isPrimary: true,
    },
    {
      url: 'C-3PO.png',
      isPrimary: true,
    },
    {
      url: 'carol.png',
      isPrimary: true,
    },
    {
      url: 'Chewbacca.png',
      isPrimary: true,
    },
    {
      url: 'daneyrys_targayen.png',
      isPrimary: true,
    },
    {
      url: 'Darth-Vader.png',
      isPrimary: true,
    },
    {
      url: 'dobby.png',
      isPrimary: true,
    },
    {
      url: 'Doctor-Strange.png',
      isPrimary: true,
    },
    {
      url: 'Flash.png',
      isPrimary: true,
    },
    {
      url: 'Freddie-Mercury.png',
      isPrimary: true,
    },
    {
      url: 'freddy_krueger.png',
      isPrimary: true,
    },
    {
      url: 'gollum.png',
      isPrimary: true,
    },
    {
      url: 'Grogu.png',
      isPrimary: true,
    },
    {
      url: 'Harley-Quinn.png',
      isPrimary: true,
    },
    {
      url: 'Iron-Man.png',
      isPrimary: true,
    },
    {
      url: 'Jason.png',
      isPrimary: true,
    },
    {
      url: 'johnwick.png',
      isPrimary: true,
    },
    {
      url: 'Leia.png',
      isPrimary: true,
    },
    {
      url: 'mr.been.png',
      isPrimary: true,
    },
    {
      url: 'Obi-Wan.png',
      isPrimary: true,
    },
    {
      url: 'once.png',
      isPrimary: true,
    },
    {
      url: 'robocop.png',
      isPrimary: true,
    },
    {
      url: 'Spider-man.png',
      isPrimary: true,
    },
    {
      url: 'Thor.png',
      isPrimary: true,
    },
    {
      url: 'walte_white.png',
      isPrimary: true,
    },
    {
      url: 'theJoker-funko1.png',
      isPrimary: true,
    },
    {
      url: 'axlrose.png',
      isPrimary: true,
    },
    {
      url: 'scaloni.png',
      isPrimary: true,
    },
    {
      url: 'funko_capitan_america.png',
      isPrimary: true,
    },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products_images', null, {});
  }
};
