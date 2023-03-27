const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.allUsers = (req, res) => {
  console.log("req made on" + req.url);
  User.find()
    .populate('roles')
    .sort({ createdAt: -1 }) //it will find all data and show it in descending order
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createUser = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync("12345678", 8), // Set default password as "12345678"
    criteria: req.body.criteria
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles },
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          user.roles = roles.map((role) => role._id);
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

          res.status(200).json(user);
          });
        }
      );
    } else {
      Role.findOne({ name: "evaluator" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.status(200).json(user);
        });
      });
    }
  });
};

exports.updateUser = (req, res) => {
  User.findById(req.body.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      var newUser = {};
      if (req.body.password === undefined || req.body.password === null || req.body.password === "") {
        newUser = {
          criteria: req.body.criteria,
        }
        User.findByIdAndUpdate(req.body.userId, {$push: newUser}, { new: true })
        .then((updatedUser) => {
          res.status(200).json(updatedUser);
        })
        .catch(error => {
          res.status(500).send({ message: error });
        })
      } else {
        newUser = {
          username: req.body.username,
          email: req.body.email,
          password: bcrypt.hashSync(req.body.password, 8), 
        };
        User.findByIdAndUpdate(req.body.userId, newUser, { new: true })
        .then((updatedUser) => {
          res.status(200).json(updatedUser);
        })
        .catch(error => {
          res.status(500).send({ message: error });
        })
      }
    } else {
      res.status(400).json({ message: "Failed! There is no user like this!" });
    }
  });
};

exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.body.userId)
    .then(deletedUser => {
      res.status(200).json(deletedUser);
    })
    .catch(err => {
      res.status(500).send({ message: err });
    })
};

exports.updateCriteria = (req, res) => {
  User.findById(req.body.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      const newUser = { 
        criteria: req.body.criteria
      };
      User.findByIdAndUpdate(req.body.userId, newUser, { new: true })
      .then((updatedUser) => {
        console.log(updatedUser);
        res.status(200).json(updatedUser);
      })
      .catch(error => {
        res.status(500).send({ message: error });
      })
    } else {
      res.status(400).json({ message: "Failed! There is no user like this!" });
    }
  });
};
