'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: "Albert Einstein",
        description: " funko de Einstein",
        price: 4500
      },
      {
        name: "Batman",
        description: "",
        price: 5000
      },
      {
        name: "C-3PO",
        description: "",
        price: 6000
      },
      {
        name: "Carol",
        description: "",
        price: 4800
      },
      {
        name: "Chewbacca",
        description: "",
        price: 7000
      },
      {
        name: "Daneyrys Targayen",
        description: "",
        price: 5500
      },
      {
        name: "Darth Vader",
        description: "",
        price: 6800
      },
      {
        name: "Dobby",
        description: "",
        price: 5600
      },
      {
        name: "Doctor Strange",
        description: "",
        price: 6800
      },
      {
        name: "Flash",
        description: "",
        price: 5200
      },
      {
        name: "Freddie Mercury",
        description: "",
        price: 7000
      },
      {
        name: "Freddy Krueger",
        description: "",
        price: 4500
      },
      {
        name: "Gollum",
        description: "",
        price: 3400
      },
      {
        name: "Baby Yoda",
        description: "",
        price: 6000
      },
      {
        name: "Harley Quinn",
        description: "",
        price: 6000
      },
      {
        name: "Iron Man",
        description: "",
        price: 6000
      },
      {
        name: "Jason",
        description: "",
        price: 6000
      },
      {
        name: "John Wick",
        description: "",
        price: 6000
      },
      {
        name: "Leia Morgana",
        description: "",
        price: 6000
      },
      {
        name: "Mr. Bean",
        description: "",
        price: 6000
      },
      {
        name: "Obi Wan Kenobi",
        description: "",
        price: 6000
      },
      {
        name: "Eleven",
        description: "",
        price: 6000
      },
      {
        name: "Robocop",
        description: "",
        price: 6000
      },
      {
        name: "Spiderman",
        description: "",
        price: 6000
      },
      {
        name: "Thor",
        description: "",
        price: 6000
      },
      {
        name: "Walter White",
        description: "",
        price: 6000
      },
      {
        name: "The Joker",
        description: "",
        price: 15000
      },
      {
        name: "Axl Rose ",
        description: "Cantante de Guns n' Roses",
        price: 17000
       },
       {
        name: "Scaloni",
        description: "Dt Campeon 2022",
        price: 16000
       },
       {
        name: "Capitán América",
        description: "",
        price: 17000
       }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
