const { Card } = require("../models");

module.exports = {
  addCard: async function (req, res) {
    try {
      const { title, list } = req.body;
      const card = await Card.create({ title, list });
      res.status(201).json(card);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getAllCards: async function (req, res) {
    try {
      const cards = await Card.findAll();
      if (cards.length === 0) {
        res.json({ message: "There are no cards!" });
      } else {
        res.status(200).json(cards);
      }
    } catch (err) {
      res.json({ message: err });
    }
  },

  removeCard: async function (req, res) {
    try {
      const { id } = req.params;
      const deletedCard = await Card.destroy({ where: { id } });
      res.status(200).json(deletedCard);
    } catch (err) {
      res.json({ message: err });
    }
  },

  updateCard: async function (req, res) {
    try {
      const { id } = req.query;
      const { title } = req.body;
      const updatedCard = await Card.update({ title }, { where: { id } });
      res.status(201).json(updatedCard);
    } catch (err) {
      res.json({ message: err });
    }
  },

  updateCardList: async function (req, res) {
    try {
      const { id } = req.params;
      const { list_id } = req.query;
      console.log(list_id);
      const updatedCard = await Card.update(
        { list: listId },
        { where: { id } }
      );
      res.status(201).json(updatedCard);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
