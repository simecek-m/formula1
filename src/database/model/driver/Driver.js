const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  height: Number,
  birthday: String,
  points: {
    type: Number,
    required: true
  },
  position: {
    type: Number,
    required: true
  },
  photo: String
});

const Driver = mongoose.model("driver", driverSchema);

module.exports = Driver;