"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ListCard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListCard.init(
    {
      list_id: DataTypes.INTEGER,
      card_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ListCard",
    }
  );
  return ListCard;
};
