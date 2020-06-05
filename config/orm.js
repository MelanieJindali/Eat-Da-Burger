var connection = require("./connection.js");

// Helper function that loops through & creates an array of question marks and turns it into a string. This helps write the mySQL query.
function questionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  };

// Helper function that converts object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        };
        arr.push(key + "=" + value);
      };
    };
    return arr.toString();
  };

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, res) {
            if (err) throw (err);
            cb(res)
        });
    },
    insertOne: function(table, column, value, cb) {
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
    },
    updateOne: function(table, columnVal, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(columnVal);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    }
}

module.exports = orm;