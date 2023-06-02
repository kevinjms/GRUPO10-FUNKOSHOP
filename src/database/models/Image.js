const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    let alias = "Image"
    let col = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      isPrimary: {
        type: Sequelize.BOOLEAN,
      },
      products_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
    }
}
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'products_images'
    }

    const Image = sequelize.define(alias, col, config)

    Image.associate = function(models) {
        Image.belongsTo(models.Product, {
            as: "images",
            foreignKey: "products_id",
        });
    }
return Image
}