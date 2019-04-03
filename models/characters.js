var orm = require("./../config/orm.js")

var characters = {
    selectAll: function(callback){
        orm.selectAll("characters", function(res){
            callback(res);
        })
    },
    insertOne: function(name, callback){
        orm.insertOne("characters", "name", name, function(res){
            callback(res);
        })

    },
    updateOne: function(updateValue, id, callback){
        orm.updateOne("characters", "destroyed", updateValue, "id", id, function(res){
            callback(res);
        })
    }
}

module.exports = characters;

