const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      this.belongsTo(models.List, {
        foreignKey: "list",
        otherKey: "id",
      });
    }
  }
  Card.init(
    {
      title: DataTypes.STRING,
      list: {
        type: DataTypes.INTEGER,
        references: {
          model: "List",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
