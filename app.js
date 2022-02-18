var express = require("express");
var app = express();
app.use(express.urlencoded());
app.use(express.static("./public"));
var mysql = require("mysql");
var conn = mysql.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  database: "food_crossroads",
  port: 3306,
});

conn.connect(function (err) {
  if (err) {
    console.log(JSON.stringify(err));
    return;
  }
});

app.get("/", function (req, res) {
  console.log(JSON.stringify);
});
app.listen(3000);
