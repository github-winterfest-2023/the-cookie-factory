const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

app.get("search", function handler(req, res) {
  // BAD: the category might have SQL special characters in it
  var query1 =
    "SELECT RECIPE FROM 'Cookie Factory' WHERE LABEL='" +
    req.params.category +
    "' ORDER BY DATE";
  pool.query(query1, [], function(err, results) {
    // process results
  });
});