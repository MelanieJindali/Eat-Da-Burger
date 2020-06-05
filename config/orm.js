var connection = require("./connection.js");

function questionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, res) {
            if (err) throw (err);
            cb(res)
        });
    },
    insertOne: function(table, column, value) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += column.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += questionMarks(value.length);
        queryString += ") ";
    
        console.log(queryString);

        connection.query(queryString, vals, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;