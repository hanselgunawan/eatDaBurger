var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(tableName, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },
  insertOne: function(tableName, burgerName, burgerStatus, burgerDate, burgerInputName, cb) {
    var queryString = "INSERT INTO ??(??, ??, ??) VALUES(?, FALSE, CURRENT_TIMESTAMP)";
    console.log(queryString);
    connection.query(queryString, [tableName, burgerName, burgerStatus, burgerDate, burgerInputName], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  },
  updateOne: function(tableName, tableUpdatedCol, burgerID, cb) {
    var queryString = "UPDATE ?? SET ?? = TRUE WHERE burgerID = ?";
    connection.query(queryString, [tableName, tableUpdatedCol, burgerID], function(err, result) {
      if(err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
