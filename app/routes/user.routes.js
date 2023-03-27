const { authJwt } = require("../middlewares");
const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  //Get all users data
  app.get(
    "/api/users",
    [authJwt.verifyToken],
    controller.allUsers
  );

  //Create user
  app.post(
    "/api/user/create",
    [authJwt.verifyToken],
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.createUser
  );

  //Create user
  app.post(
    "/api/user/update",
    [authJwt.verifyToken],
    controller.updateUser
  );

  app.delete(
    "/api/user/delete",
    [authJwt.verifyToken],
    controller.deleteUser
  );

  app.post(
    "/api/user/updateCriteria",
    [authJwt.verifyToken],
    controller.updateCriteria
  )
};
