var characters = require("./../models/characters.js");

var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    characters.selectAll(function(data){
        var handleBarsObj = {
            character: data
        };
        res.render("index", handleBarsObj)
    });
});

router.post("/api/character", function(req, res){
    var name = req.body.name;
    
    characters.insertOne(name, function(result){
        res.redirect("/")
    });
});

router.put("/api/character/:id", function(req, res){
    var id = req.params.id
    var destroy = req.params.destroy
    characters.updateOne(destroy, id, function(){
        res.redirect("/")
    });
});

module.exports = router;
