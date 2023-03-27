const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.employee = require("./employee.model");
db.mainDep = require("./maindep.model");
db.subDep = require("./subdep.model");

db.ROLES = ["evaluator", "admin"];

module.exports = db;