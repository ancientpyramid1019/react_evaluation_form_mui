const db = require("../models");
const User = db.user;
const Role = db.role;
const Employee = db.employee;
const MainDep = db.mainDep;
const SubDep = db.subDep;

exports.allSubDeps = (req, res) => {
  SubDep.find()
    .populate("main_dep_id")
    .sort({ createdAt: -1 }) //it will find all data and show it in descending order
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createSubDep = (req, res) => {
  console.log(req.body)
  const subDep = new SubDep({
    name: req.body.name,
    main_dep_id: req.body.main_dep_id,
  });
  subDep
    .save()
    .then((subD) => {
      res.status(200).json(subD);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

exports.updateSubDep = (req, res) => {
  SubDep.findById(req.body.data.subDepId).exec((err, md) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (md) {
      const newSubDep = {
        name: req.body.data.name,
        main_dep_id: req.body.data.main_dep_id,
      };
      SubDep.findByIdAndUpdate(req.body.data.subDepId, newSubDep, { new: true })
        .then((updatedSubDep) => {
          res.status(200).json(updatedSubDep);
        })
        .catch((error) => {
          res.status(500).send({ message: error });
        });
    } else {
      res
        .status(400)
        .json({ message: "Failed! There is no sub department like this!" });
    }
  });
};

exports.deleteSubDep = (req, res) => {
  Employee.find({ sub_dep_id: req.body.subDepId }).then((emps) => {
    if (emps.length) {
      res
        .status(400)
        .json({ message: "Cant delete this sub department with employees." });
    } else {
      SubDep.findByIdAndDelete(req.body.subDepId)
        .then((deletedSubDep) => {
          res.status(200).json(deletedSubDep);
        })
        .catch((err) => {
          res.status(500).send({ message: err });
        });
    }
  });
};
