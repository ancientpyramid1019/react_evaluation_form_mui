const mongoose = require("mongoose");

const SubDep = mongoose.model(
  "SubDep",
  new mongoose.Schema({
    name: String,
    main_dep_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MainDep",
    }
  }, { timestamps: true })
);

module.exports = SubDep;
