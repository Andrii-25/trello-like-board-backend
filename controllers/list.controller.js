const { List } = require("../models");

module.exports = {
  addList: async function (req, res) {
    try {
      const { title } = req.body;
      const list = await List.create({ title });
      res.status(201).json(list);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getAllLists: async function (req, res) {
    try {
      const lists = await List.findAll();
      if (lists.length === 0) {
        res.json({ message: "There are no lists!" });
      } else {
        res.status(200).json(lists);
      }
    } catch (err) {
      res.json({ message: err });
    }
  },

  removeList: async function (req, res) {
    try {
      const { id } = req.params;
      const deletedList = await List.destroy({ where: { id } });
      res.status(200).json(deletedList);
    } catch (err) {
      res.json({ message: err });
    }
  },

  updateList: async function (req, res) {
    try {
      const { id } = req.params;
      const { title } = req.body;
      const updatedList = await List.update({ title }, { where: { id } });
      res.status(201).json(updatedList);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
