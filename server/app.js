var express = require("express");
var cors = require("cors");
var app = express();
app.listen(8000);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const Bluebird = require("bluebird");

var mysql = require("mysql");
const { json } = require("express/lib/response");
var conn = mysql.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  port: 3306,
  database: "food_crossroads",
  multipleStatements: true,
});

conn.connect(function (err) {
  console.log(err);
});

app.get("/ordermanagement/list", function (req, res) {
  var sql =
    "SELECT * FROM order_record INNER JOIN restaurant on restaurant.id = order_record.restaurant_id;SELECT * FROM order_record INNER JOIN menu on menu.id = order_record.menu_id ; SELECT * FROM order_record INNER JOIN orders on orders.id = order_record.orders_id";
  conn.query(sql, [], function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/member/list/:id", function (req, res) {
  conn.query(
    "SELECT * FROM member WHERE id = ? ",
    [req.params.id],
    function (err, rows) {
      res.send(JSON.stringify(rows[0]));
    }
  );
});

app.put("/member/list/:id", async (req, res) => {
  let result = await conn.query(
    "UPDATE member set user_name=? , user_tel=?  where id =?",
    [req.body.user_name, req.body.user_tel, req.body.id],
    function (err, rows) {
      res.send(JSON.stringify(req.body));
    }
  );
});
