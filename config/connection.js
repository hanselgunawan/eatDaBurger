const mysql = require("mysql");

let config = {
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "b02a8d71a08b2c",
    password: "c1d6666a",
    database: "heroku_23c00da2bdc684e"
};

let pool = mysql.createPool(config);

module.exports = {
    query: function(){
        let sql_args = [];
        let args = [];
        for(let i=0; i<arguments.length; i++){
            args.push(arguments[i]);
        }
        let callback = args[args.length-1]; //last arg is callback
        pool.getConnection(function(err, connection) {
            if(err) {
                console.log(err);
                return callback(err);
            }
            if(args.length > 2){
                sql_args = args[1];
            }
            connection.query(args[0], sql_args, function(err, results) {
                connection.release(); // always put connection back in pool after last query
                if(err){
                    console.log(err);
                    return callback(err);
                }
                callback(null, results);
            });
        });
    }
};

// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });
//
// module.exports = connection;
