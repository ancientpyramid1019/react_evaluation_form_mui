const db = require("../models");
const User = db.user;
const Role = db.role;
const Employee = db.employee;
const MainDepartment = db.mainDep;
const SubDepartment = db.subDep;

exports.allEmployees = (req, res) => {
  Employee.find()
    .populate("sub_dep_id")
    .sort({ createdAt: -1 }) //it will find all data and show it in descending order
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.createEmployee = (req, res) => {
  const employee = new Employee({
    name: req.body.name,
    sub_dep_id: req.body.sub_dep_id,
  });
  employee
    .save()
    .then((emp) => {
      res.status(200).json(emp);
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

exports.updateEmployee = (req, res) => {

    Employee.findById(req.body.employeeId).exec((err, emp) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (emp) {
        const newEmployee = {
          name: req.body.name,
          sub_dep_id: req.body.sub_dep_id 
        };
        Employee.findByIdAndUpdate(req.body.employeeId, newEmployee, { new: true })
        .then((updatedEmployee) => {
          res.status(200).json(updatedEmployee);
        })
        .catch(error => {
          res.status(500).send({ message: error });
        })
      } else {
        res.status(400).json({ message: "Failed! There is no employee like this!" });
      }
    });
  };
  
  exports.deleteEmployee = (req, res) => {
    console.log(req.body);
    Employee.findByIdAndDelete(req.body.employeeId)
      .then(deletedEmployee => {
        res.status(200).json(deletedEmployee);
      })
      .catch(err => {
        res.status(500).send({ message: err });
      })
  };
