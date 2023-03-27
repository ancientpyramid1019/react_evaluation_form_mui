const { authJwt } = require("../middlewares");
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/sub_dep.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //Get all users data
  app.get(
    "/api/sub_deps",
    [authJwt.verifyToken],
    controller.allSubDeps
  );

  //Create user
  app.post(
    "/api/sub_dep/create",
    [authJwt.verifyToken],
    controller.createSubDep
  );

  //Create user
  app.post(
    "/api/sub_dep/update",
    [authJwt.verifyToken],
    controller.updateSubDep
  );

  app.delete(
    "/api/sub_dep/delete",
    [authJwt.verifyToken],
    controller.deleteSubDep
  );
};
