
const express = require("express");
const router = express.Router();

const db = require("../models");



router.get("/", function(req, res) {
  db.burgers.findAll({}).then(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});


router.post("/api/burgers", function(req, res) {
  db.burgers.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(result) {
      res.json({id: result.insertID});
    });
});


router.put("/api/burgers/:id", function(req, res) {
  db.burgers.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(result) {
    res.status(200).end();
  }); 
});


module.exports = router;
