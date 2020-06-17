var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Redirect to index pathway
router.get("/", function(req, res) {
    res.redirect("/index");
});

router.get("/index", function(req, res) {
    burger.all(function(data) {
        // Handlebars object
        var hbsObj = { burgers: data };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([ "burger_name", "devoured" ], [ req.body.name, req.body.devoured ], function(res) {
        res.redirect("/index");
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "ID =" + req.params.id;
    console.log("Condition:", condition);

    burger.update({ devoured: req.body.devoured }, condition, function(data) {
        res.redirect("/index")
    });
});

module.exports = router;