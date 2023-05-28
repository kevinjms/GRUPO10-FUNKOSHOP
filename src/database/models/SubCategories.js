const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    let alias = "Subcategory"
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
        deletedAt: false
    }

    const Subcategory = sequelize.define(alias, col, config)

    Subcategory.associate = function(models) {
        Subcategory.hasMany(models.Product, {
            as: "products",
            foreignKey: "product_subcategories_id",
        });
    }
return Subcategory
}