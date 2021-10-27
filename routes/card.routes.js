const express = require("express");
const {
  addCard,
  getAllCards,
  removeCard,
  updateCard,
} = require("../controllers/card.controller.js");

const router = express.Router();

router.post("/", addCard);

router.get("/", getAllCards);

router.delete("/:id", removeCard);

router.patch("/:id", updateCard);

module.exports = router;
