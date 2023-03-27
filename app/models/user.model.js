const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      }
    ],
    criteria: [
      {
        emp_id :{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Employee",
        },
        title: {
          type: String,
          default: "Undefined"
        },
        grade: {
          type: Number,
          default: 5
        }
      }
    ] 
  }, { timestamps: true })
);

module.exports = User;
