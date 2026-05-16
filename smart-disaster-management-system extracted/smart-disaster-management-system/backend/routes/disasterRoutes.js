
const express = require("express");
const router = express.Router();

const {
  getDisasters,
  addDisaster
} = require("../controllers/disasterController");

router.get("/", getDisasters);
router.post("/", addDisaster);

module.exports = router;
