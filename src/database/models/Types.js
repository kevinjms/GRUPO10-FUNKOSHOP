const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    let alias = "Type"
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

    const Type = sequelize.define(alias, col, config)

    Type.associate = function(models) {
        Type.hasMany(models.User, {
            as: "users",
            foreignKey: "types_id",
        });
    }
return Type
}