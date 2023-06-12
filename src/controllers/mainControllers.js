const path = require('path');
const fs = require('fs');
const db = require('../database/models');


const controller = {
    index: async (req, res) => {
        try {
          const visited = await db.Product.findAll({
            include: [{ association: "subcategories" }, { model: db.Image, as: 'images' }],
            where: {
              product_subcategories_id: 2
            }
          });
      
          const inSale = await db.Product.findAll({
            include: [{ association: "subcategories" }, { model: db.Image, as: 'images' }],
            where: {
              product_subcategories_id: 1
            }
          });
      
          res.render('index', { inSale, visited });
        } catch (error) {
          console.error(error);
          res.status(500).send('Error');
        }
      },
      car: (req, res) => {
        db.Product.findByPk(req.params.id)
          res.render('carrito-de-compras');
      },
    us: (req, res) => {
        res.render('aboutUs');
    },
    personalized: (req, res) => {
        res.render('personalized');
    }
}

module.exports = controller;