const express = require("express");
const {
  addCard,
  getAllCards,
  removeCard,
  updateCard,
  updateCardList,
} = require("../controllers/card.controller.js");

const router = express.Router();

router.post("/", addCard);

router.get("/", getAllCards);

router.delete("/:id", removeCard);

router.patch("/", updateCard);
router.patch("/:id", updateCardList);

module.exports = router;
