"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("listcards", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      list_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "lists",
          },
          key: "id",
        },
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "cards",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("listcards");
  },
};
