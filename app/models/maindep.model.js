const mongoose = require("mongoose");

const MainDep = mongoose.model(
  "MainDep",
  new mongoose.Schema({
    name: String
  }, { timestamps: true })
);

module.exports = MainDep;
