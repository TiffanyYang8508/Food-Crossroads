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
    "SELECT selfpick_date,order_date,restaurant_name,total_amount,orders_id FROM orders JOIN order_record ON orders.id = order_record.id JOIN restaurant ON order_record.restaurant_id = restaurant.id";
  conn.query(sql, [], function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/bookingmanagement/list", function (req, res) {
  var sql =
    "SELECT booking_date,booking_time,booking_id,booking_peoplenumber,restaurant_name FROM booking JOIN booking_record ON booking.id = booking_record.id JOIN restaurant ON booking_record.restaurant_id = restaurant.id";
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
