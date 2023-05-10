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
            references: {
              model:'products',
              key:'id'
            }
          },
          product_subcateogries_id: {
            type: Sequelize.INTEGER,
            references: {
              model:'products',
              key:'id'
            }
          },
          price: {
            type: Sequelize.DECIMAL(11,2),
            allowNull: false,
        }
}
    let config = {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Product = sequelize.define(alias, col, config)

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "products_id"
        });

        Product.belongsTo(models.Subcategory, {
            as: "subcategories",
            foreignKey: "products_id"
        });

        Product.belongsToMany(models.Image, {
            as: "images",
            through: "products_images",
            foreignKey: "products_id",
            otherKey: "image_id",
            timestamps: false
        });
    }
return Product
}