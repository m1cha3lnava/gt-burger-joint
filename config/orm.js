// Import MySQL connection.
var connection = require("../config/connection.js");
var orm = {
  selectAll: function () {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  } /* 
  insertOne: function (whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function (whatToSelect, tableInput) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [whatToSelect, tableInput], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  }, */,
  /* const function insertOne() {
    //insert into db
}

const function updateOne() {
    //update table where
} */
};

// Export the orm object for the model
module.exports = orm;
