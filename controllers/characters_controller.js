var characters = require("./../models/characters.js");

var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    characters.selectAll(function(data){
        var handleBarsObj = {
            characters: data
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
    characters.updateOne(true, id, function(){
        console.log(id + " is Destroyed")
        res.end()
    });
});

module.exports = router;
