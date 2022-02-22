const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const { registerValidation } = require("./validation");
app.listen(8000);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

var mysql = require("mysql");
const { json, send } = require("express/lib/response");
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
    "SELECT selfpick_date, order_date, restaurant_name, total_amount, food_name FROM orders JOIN order_record ON orders.id = order_record.id JOIN restaurant ON order_record.restaurant_id = restaurant.id JOIN menu ON order_record.menu_id = menu.id";
  conn.query(sql, [], function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/bookingmanagement/list", function (req, res) {
  var sql =
    "SELECT booking_date, booking_time, user_name, booking_peoplenumber, restaurant_name FROM booking JOIN booking_record ON booking.id = booking_record.id JOIN restaurant ON booking_record.restaurant_id = restaurant.id JOIN member ON booking_record.user_id = member.id";
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

app.post("/register", async (req, res) => {
  //判斷格式是否有誤
  let { error } = registerValidation(req.body);
  if (error) {
    if (error.details[0].context.key === "email") {
      return res.send(error);
    } else if (error.details[0].context.key === "password") {
      return res.send(error);
    }
  }

  const hashedPassword = await bcrypt.hash(req.body.user_pwd, 10);
  let result = await conn.query(
    "INSERT INTO member (user_name,user_email,user_pwd,user_tel) VALUES (?,?,?,?)",
    [
      req.body.user_name,
      req.body.user_email,
      hashedPassword,
      req.body.user_tel,
    ],
    (err, rows) => {
      console.log(rows);
      res.send(JSON.stringify(req.body));
    }
  );
});

app.get("/restaurant",function(req,res){
  conn.query("SELECT * FROM restaurant INNER JOIN restaurant_category ON restaurant.restaurant_category_id = restaurant_category.id",
  [],
  function(err,rows){
    res.send(JSON.stringify(rows));
  }
  );
});