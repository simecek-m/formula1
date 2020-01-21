const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  principal: {
    type: String,
    required: true
  },
  residence: {
    type: String,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  points: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

const Team = mongoose.model("team", teamSchema);

module.exports = Team;