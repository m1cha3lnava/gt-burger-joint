const orm = require("../config/orm.js");
//create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
  selectAll: function (cb) {
    orm.selectAll(function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (vals, cb) {
    orm.insertOne(vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    // tablename, column name, boolean
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
};
// Export the database functions for the controller.
module.exports = burger;
