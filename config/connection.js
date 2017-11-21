const mysql = require("mysql");

let connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b02a8d71a08b2c",
    password: "c1d6666a",
    database: "heroku_23c00da2bdc684e"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
