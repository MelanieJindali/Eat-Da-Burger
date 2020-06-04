var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, res) {
            if (err) throw (err);
            console.log(res)
        });
    }
}

module.exports = orm;