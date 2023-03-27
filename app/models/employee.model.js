const mongoose = require("mongoose");

const Employee = mongoose.model(
  "Employee",
  new mongoose.Schema({
    name: String,
    sub_dep_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubDep",
    },
  }, { timestamps: true })
);

module.exports = Employee;
