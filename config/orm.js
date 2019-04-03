var connection = require("./connection.js")

var orm = {
    selectAll: function(tableName){
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [tableName], function(err, result){
            if (err) throw err;

            return result
        })
    },
    insertOne: function(tableName, colOneName, colTwoName, colOneValue, colTwoValue){
        var queryString = "INSERT INTO ??(??, ??) VALUES(? , ?)";
        
        connection.query(queryString, [tableName, colOneName, colTwoName, colOneValue, colTwoValue], function(err, result){
            if (err) throw err;

            return result
        })
    }, 
    updateOne: function(tableName, colToUpdate, updateValue, colToSearch, colValue){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, colToUpdate, updateValue, colToSearch, colValue], function(err, result){
            if (err) throw err;

            return result;
        })
    }
}