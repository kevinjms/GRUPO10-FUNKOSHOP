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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Category = sequelize.define(alias, col, config)

    Category.associate = function(models) {
        Category.belongsToMany(models.Category, {
            as: "categories",
            through: "products_categories",
            foreignKey: "product_categories_id",
            otherKey: "products_id",
            timestamps: false
        });
    }
return Category
}