var orm = require("./../config/orm.js")

var characters = {
    selectAll: function(callback){
        orm.selectAll("characters", function(res){
            callback(res);
        })
    },
    insertOne: function(colOneName, colTwoName, colOneValue, colTwoValue, callback){
        orm.insertOne("characters", colOneName, colTwoName, colOneValue, colTwoValue, function(res){
            callback(res);
        })

    },
    updateOne: function(colToUpdate, updateValue, colToSearch, colValue, callback){
        orm.updateOne("characters", colToUpdate, updateValue, colToSearch, colValue, function(res){
            callback(res);
        })
    }
}

module.exports = characters;

