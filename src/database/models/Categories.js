const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    let alias = "Category"
    let col = {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: Sequelize.TEXT,
            allowNull: false,
          }
}
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'products_categories'
    }

    const Category = sequelize.define(alias, col, config)

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "product_categories_id",
        });
    }
return Category
}