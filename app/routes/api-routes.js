// Routes
// =============================================================

var sqlize = require('../models/sqlize.js')

//export this for index.js
module.exports = function(app) {

  // Index route loads index.html
  app.get("/apiData", function(req, res) {
    console.log("api-route " + req.query)
    var input1 = req.query.input1;
    sqlize.inputData(input1)
  });

};