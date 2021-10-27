const express = require("express");
const {
  addList,
  getAllLists,
  removeList,
  updateList,
} = require("../controllers/list.controller.js");

const router = express.Router();

router.post("/", addList);

router.get("/", getAllLists);

router.delete("/:id", removeList);

router.patch("/:id", updateList);

module.exports = router;
