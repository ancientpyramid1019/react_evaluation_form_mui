const { authJwt } = require("../middlewares");
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/main_dep.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //Get all users data
  app.get(
    "/api/main_deps",
    [authJwt.verifyToken],
    controller.allMainDeps
  );

  //Create user
  app.post(
    "/api/main_dep/create",
    [authJwt.verifyToken],
    controller.createMainDep
  );

  //Create user
  app.post(
    "/api/main_dep/update",
    [authJwt.verifyToken],
    controller.updateMainDep
  );

  app.delete(
    "/api/main_dep/delete",
    [authJwt.verifyToken],
    controller.deleteMainDep
  );
};
