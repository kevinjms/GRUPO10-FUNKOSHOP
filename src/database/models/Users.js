const { Sequelize } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    let alias = "User"
    let col = {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          firstName: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          lastName: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          email: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          adress:{
            type:Sequelize.TEXT,
            allowNull: false
          },
          city:{
            type:Sequelize.TEXT,
            allowNull: false
          },
          zipCode:{
            type:Sequelize.INTEGER,
            allowNull: false
          },
          cell:{
            type:Sequelize.INTEGER,
            allowNull: false
          },
          password: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          avatar: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          types_id: {
            type: Sequelize.INTEGER,
            references: {
              model:'Type',
              key:'id'
            }
          }
}
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const User = sequelize.define(alias, col, config)

    User.associate = function(models) {
        User.belongsTo(models.Type, {
            as: "types",
            foreignKey: "types_id"
        });
    }
return User
}