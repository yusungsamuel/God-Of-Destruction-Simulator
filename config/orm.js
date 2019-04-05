var connection = require("./connection.js")

var orm = {
    selectAll: function (tableName, callback) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;

            callback(result)
        })
    },
    insertOne: function (tableName, colOneName, colOneValue, callback) {
        var queryString = "INSERT INTO ??(??) VALUES(?)";

        connection.query(queryString, [tableName, colOneName, colOneValue], function (err, result) {
            if (err) throw err;

            callback(result)
        })
    },
    updateOne: function (tableName, colToUpdate, updateValue, colToSearch, colValue, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, colToUpdate, updateValue, colToSearch, colValue], function (err, result) {
            if (err) throw err;

            callback(result);
        })
    }
}

module.exports = orm;