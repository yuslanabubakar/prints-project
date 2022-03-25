const db = require("../models");
const userRoutes = require("../routes/user.routes");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };

  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.getAllUsers = (req, res) => {
    User.find({}, function(err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send(result)
    }).select(['-password']);
  };

  exports.setQuotas = (req, res) => {
    User.findByIdAndUpdate({_id: req.body.id} , {quota: req.body.quota}, function(err, result) {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      res.status(200).send("Successfull to update quotas");
    })
  };