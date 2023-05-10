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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Subcategory = sequelize.define(alias, col, config)

    Subcategory.associate = function(models) {
        Subcategory.belongsToMany(models.Subcategory, {
            as: "subcategories",
            through: "products_subcategories",
            foreignKey: "product_subcategories_id",
            otherKey: "products_id",
            timestamps: false
        });
    }
return Subcategory
}