const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    let alias = "Product"
    let col = {
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
          product_categories_id: {
            type: Sequelize.INTEGER,
          },
          product_subcategories_id: {
            type: Sequelize.INTEGER,
          },
          price: {
            type: Sequelize.DECIMAL(11,2),
            allowNull: false,
        }
}
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Product = sequelize.define(alias, col, config)

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "product_categories_id"
        });

        Product.belongsTo(models.Subcategory, {
            as: "subcategories",
            foreignKey: "product_subcategories_id"
        });

        Product.hasMany(models.Image, {
          as: "images",
          foreignKey: "products_id",
      });
    }
return Product
}