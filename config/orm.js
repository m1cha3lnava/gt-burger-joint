// Import MySQL connection.
var connection = require("../config/connection.js");
var orm = {
  selectAll: function () {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function (whatToInput) {
    // INSERT INTO table_name (column1, column2, column3, ...) VALUES (value1, value2, value3, ...); 
    var queryString = "INSERT INTO burgers VALUES ??";
    connection.query(queryString, [whatToInput], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function (whatToSetItTo, whatToUpdate) {
    // UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
    var queryString = "UPDATE burgers SET devoured = ?? WHERE ??";
    connection.query(queryString, [whatToSetItTo, whatToUpdate], function (
      err,
      result
    ) {
      if (err) throw err;
      console.log(result);
    });
  },
};

// Export the orm object for the model
module.exports = orm;
