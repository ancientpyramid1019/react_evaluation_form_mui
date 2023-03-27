const db = require("../models");
const User = db.user;
const Role = db.role;
const Employee = db.employee;
const MainDep = db.mainDep;
const SubDep = db.subDep;

exports.allMainDeps = (req, res) => {
  MainDep.find()
    .sort({ createdAt: -1 }) //it will find all data and show it in descending order
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createMainDep = (req, res) => {
  const mainDep = new MainDep({
    name: req.body.name,
  });
  mainDep
    .save()
    .then((mainD) => {
      res.status(200).json(mainD);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

exports.updateMainDep = (req, res) => {
  MainDep.findById(req.body.data.mainDepId).exec((err, md) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (md) {
      const newMainDep = {
        name: req.body.data.name,
      };
      MainDep.findByIdAndUpdate(req.body.data.mainDepId, newMainDep, { new: true })
        .then((updatedMainDep) => {
          res.status(200).json(updatedMainDep);
        })
        .catch((error) => {
          res.status(500).send({ message: error });
        });
    } else {
      res
        .status(400)
        .json({ message: "Failed! There is no main department like this!" });
    }
  });
};

exports.deleteMainDep = (req, res) => {
  SubDep.find({ main_dep_id: req.body.mainDepId })
    .then((subDeps) => {
      if (subDeps.length) {
        res.status(400).json({
          message: "Cant delete this main department with sub departs", subDeps
        });
      } else {
        MainDep.findByIdAndDelete(req.body.mainDepId)
          .then((deletedMainDep) => {
            res.status(200).json(deletedMainDep);
          })
          .catch((err) => {
            res.status(500).send({ message: err });
          });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
