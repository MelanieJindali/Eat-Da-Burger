var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.updateOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(columnVal, condition, cb) {
        orm.updateOne("burgers", columnVal, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;