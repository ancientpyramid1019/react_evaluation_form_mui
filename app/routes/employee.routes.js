const { authJwt } = require("../middlewares");
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/employee.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //Get all users data
  app.get(
    "/api/employees",
    [authJwt.verifyToken],
    controller.allEmployees
  );

  //Create user
  app.post(
    "/api/employee/create",
    [authJwt.verifyToken],
    controller.createEmployee
  );

  //Create user
  app.post(
    "/api/employee/update",
    [authJwt.verifyToken],
    controller.updateEmployee
  );

  app.delete(
    "/api/employee/delete",
    [authJwt.verifyToken],
    controller.deleteEmployee
  );
};
