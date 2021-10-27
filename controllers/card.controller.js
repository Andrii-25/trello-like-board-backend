const { Card } = require("../models");

module.exports = {
  addCard: async function (req, res) {
    try {
      const { title } = req.body;
      const { list_id } = req.query;
      const card = await Card.create({ title, list: list_id });
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
      const { id } = req.params;
      const { title } = req.body;
      const { list_id } = req.query;
      const updatedCard = await Card.update(
        { title, list: list_id },
        { where: { id } }
      );
      res.status(201).json(updatedCard);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
