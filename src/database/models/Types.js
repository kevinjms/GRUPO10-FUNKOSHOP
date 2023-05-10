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
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }

    const Type = sequelize.define(alias, col, config)

    Type.associate = function(models) {
        Type.belongsToMany(models.Type, {
            as: "types",
            through: "users_types",
            foreignKey: "types_id",
            otherKey: "users_id",
            timestamps: false
        });
    }
return Type
}