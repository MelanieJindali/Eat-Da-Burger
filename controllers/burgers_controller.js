var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Redirect to index pathway
router.get("/", function(req, res) {
    res.redirect("/index");
});

router.get("/", function(req, res) {
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

