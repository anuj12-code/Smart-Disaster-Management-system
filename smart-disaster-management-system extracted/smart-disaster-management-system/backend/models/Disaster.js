
const mongoose = require("mongoose");

const DisasterSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  severity: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Disaster", DisasterSchema);
