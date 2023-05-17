"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "products_categories",
      [
        {
          name: "STAR WARS",
        },
        {
          name: "DC",
        },
        {
          name: "SERIES",
        },
        {
          name: "MARVEL",
        },
        {
          name: "HARRY POTTER",
        },
        {
          name: "STAR WARS",
        },
        {
          name: "PELICULAS",
        },
        {
          name: "FAMOSOS",
        },
        {
          name: "DEPORTES",
        },
        {
          name: "MUSICA",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products_categories", null, {});
  },
};
