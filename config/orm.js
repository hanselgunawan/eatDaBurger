var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if(err) throw err;
      console.log(result);
    });
  },
  insertOne: function(tableName, burgerName, burgerStatus, burgerDate, burgerInputName) {
    var queryString = "INSERT INTO ??(??, ??, ??) VALUES(?, FALSE, CURRENT_TIMESTAMP)";
    console.log(queryString);
    connection.query(queryString, [tableName, burgerName, burgerStatus, burgerDate, burgerInputName], function(err, result) {
      if(err) throw err;
      console.log(result);
    });
  },
  updateOne: function(tableName, tableUpdatedCol, burgerID) {
    var queryString = "UPDATE ?? SET ?? = TRUE WHERE burgerID = ?";
    connection.query(queryString, [tableName, tableUpdatedCol, burgerID], function(err, result) {
      if(err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
