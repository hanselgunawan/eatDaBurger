/**
 * Created by hansel.tritama on 11/18/17.
 */
var orm = require("../config/orm.js");

var ormCall = {
    selectAll: function (tableName, callback) {
        orm.selectAll(tableName, function (res) {
            callback(res);
        });
    },
    insertOne: function (tableName, burgerName, burgerStatus, burgerDate, burgerInputName, callback) {
        orm.insertOne(tableName, burgerName, burgerStatus, burgerDate, burgerInputName, function (res) {
            callback(res);
        });
    },
    updateOne: function (tableName, tableUpdatedCol, burgerID, callback) {
        orm.updateOne(tableName, tableUpdatedCol, burgerID, function (res) {
            callback(res);
        });
    }
};

module.exports = ormCall;