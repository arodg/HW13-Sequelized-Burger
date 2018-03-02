// Code below based on Class Activity-CatsApp
// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");
const connection = require("../config/connection.js")

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(cols, vals ,cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

  

// Export the database functions for the controller (burgers_controllers.js).
module.exports = burgers;
