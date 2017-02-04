// Dependencies CREATES TABLE
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");

// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "makeTable" table that matches up with DB
var myTable = sequelize.define("tableName", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  item1: {
    type: Sequelize.STRING
  }
})


// Syncs with DB. Automatically creates table
exports.inputData = function(item1){
  console.log('sqlize.js ' + item1)
  myTable.create({
        item1: item1
  });
}

myTable.sync()

