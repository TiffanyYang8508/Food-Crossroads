const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
app.listen(8000);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mysql = require("mysql");
const { json, send } = require("express/lib/response");
const { func } = require("joi");
const conn = mysql.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  port: 3306,
  database: "food_crossroads",
  multipleStatements: true,
});

conn.connect(function (error) {
  if (error) {
    console.log(JSON.stringify(error));
    return;
  }
  console.log("connection success");
});

app.get("/ordermanagement/list/:id", function (req, res) {
  var sql =
    "SELECT member.id,selfpick_date,user_name,user_tel,user_email, order_date, restaurant_name, total_amount, food_name FROM orders JOIN order_record ON orders.id = order_record.orders_id JOIN restaurant ON order_record.restaurant_id = restaurant.id JOIN menu ON order_record.menu_id = menu.id JOIN member ON member.id = order_record.user_id WHERE member.id =? ORDER BY orders_id DESC";
  conn.query(sql, [req.params.id], function (err, rows) {
    res.send(JSON.stringify(rows));
  });
});

app.get("/bookingmanagement/list/:id", function (req, res) {
  var sql =
    "SELECT member.id , booking_id , booking_date, booking_time, user_name,user_tel,user_email, booking_service, booking_peoplenumber, restaurant_name FROM booking JOIN booking_record ON booking.id = booking_record.booking_id JOIN restaurant ON booking_record.restaurant_id = restaurant.id JOIN member ON booking_record.user_id = member.id WHERE member.id=? ORDER BY booking_id DESC";
  conn.query(sql, [req.params.id], function (err, rows) {
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
  try {
    let result = {};

    conn.query(
      "SELECT user_email FROM member WHERE user_email = ?",
      req.body.user_email,
      async function (err, rows) {
        // ?????????????????????????????????????????????client?????????????????????????????????????????????????????????
        if (err) {
          console.log(err);
          result["status"] = "0";
          result["err"] = "????????????????????????????????????";
          res.json(result);
        }
        //??????????????????????????????
        if (
          req.body.user_pwd === "" ||
          req.body.user_email === "" ||
          req.body.user_name === "" ||
          req.body.user_pwd_confirm === "" ||
          req.body.user_tel === ""
        ) {
          result["status"] = "2";
          result["err"] = "?????????????????????";
          res.json(result);
          return result;
        } else {
          // ????????????????????????email
          if (rows.length >= 1) {
            result["status"] = "3";
            result["err"] = "???????????????Email";
            res.json(result);
            return result;
          } else {
            //????????????????????????????????????
            if (req.body.user_pwd !== req.body.user_pwd_confirm) {
              result["status"] = "4";
              result["err"] = "???????????????";
              res.json(result);
              return result;
            } else {
              // ????????????????????????
              const hashedPassword = await bcrypt.hash(req.body.user_pwd, 10);
              conn.query(
                "INSERT INTO `member`(`user_name`, `user_email`, `user_pwd`, `user_tel`) VALUES (?, ?, ?, ?)",
                [
                  req.body.user_name,
                  req.body.user_email,
                  hashedPassword,
                  req.body.user_tel,
                ]
              );
              result["status"] = "1";
              result["err"] = "????????????";
              res.json(result);
              // res.send('register success');
            }
          }
        }
      }
    );
  } catch {
    res.send("register fail");
  }
});

app.put("/editpwd", async (req, res) => {
  try {
    let result = {};
    const sql = "SELECT user_pwd FROM member where user_pwd=?";
    const params = req.body.user_pwd;
    conn.query(sql, params, async (err, rows) => {
      if (
        req.body.user_pwd === "" ||
        req.body.user_npwd === "" ||
        req.body.user_npwd_confirm === ""
      ) {
        result["status"] = "3";
        result["err"] = "?????????????????????";
        res.json(result);
      } else {
        if (rows.length != 1) {
          result["status"] = "0";
          result["err"] = "????????????????????????";
          res.json(result);
        } else {
          if (req.body.user_npwd !== req.body.user_npwd_confirm) {
            result["status"] = "1";
            result["err"] = "???????????????";
            res.json(result);
          } else {
            const hashedPassword = await bcrypt.hash(req.body.user_pwd, 10);
            conn.query(
              "UPDATE member SET user_pwd = ? WHERE user_email = ?",
              [hashedPassword, req.body.user_email],
              function (err, rows) {
                res.send(JSON.stringify(rows));
              }
            );
            result["status"] = "2";
            result["err"] = "????????????";
            res.json(result);
          }
        }
      }
    });
  } catch {
    res.send("change fail");
  }
});

app.post("/login", (req, res) => {
  const query = "SELECT user_pwd from member where user_email=?";
  const params = req.body.user_email;
  conn.query(query, params, async (err, rows) => {
    if (err) throw err;
    var output = {};
    if (rows.length != 0) {
      // console.log(rows[0]['user_pwd']);
      var password_hash = rows[0]["user_pwd"];
      const verified = bcrypt.compareSync(req.body.user_pwd, password_hash);
      if (verified) {
        output["status"] = "1";
        output["message"] = "??????????????????";
      } else {
        output["status"] = "0";
        output["message"] = "????????????";
      }
    } else {
      output["status"] = "2";
      output["message"] = "???????????????????????????";
    }
    res.json(output);
  });
});

app.get("/detail/record/:id", function (req, res) {
  conn.query(
    "SELECT booking_id,user_name , user_tel, user_email,booking_peoplenumber,booking_date,booking_time,booking_service FROM member JOIN booking ON member.id = booking.user_id JOIN booking_record ON booking.id = booking_record.booking_id WHERE booking_id =?",
    [req.params.id],
    function (err, rows) {
      res.send(JSON.stringify(rows[0]));
    }
  );
});

app.delete("/cancelbooking/:id", function (req, res) {
  var sql = `DELETE FROM booking_record WHERE booking_id =?`;
  conn.query(sql, [req.params.id], function (err, rows) {
    res.send("#" + req.params.id + " deleted");
  });
});

app.get("/restaurant/list", function (req, res) {
  conn.query(
    "SELECT * FROM restaurant INNER JOIN restaurant_category ON restaurant.restaurant_category_id = restaurant_category.id",
    [],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/restaurant/list/:category", function (req, res) {
  conn.query(
    "SELECT * FROM restaurant INNER JOIN restaurant_category ON restaurant.restaurant_category_id = restaurant_category.id WHERE restaurant_category = ?",
    [req.params.category],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/search/keyword/:keyword", function (req, res) {
  // ????????????
  // SELECT restaurant_name,restaurant_address,GROUP_CONCAT(service_category) AS 'service' FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id WHERE service_category LIKE '${req.params.other}%' GROUP BY restaurant_name,restaurant_address
  // ????????????
  // SELECT restaurant_name,restaurant_address,service_category FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id WHERE restaurant_address LIKE '${req.params.area}%'
  // ???????????????
  // SELECT restaurant_name,restaurant_address,service_category FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id WHERE restaurant_name LIKE '${req.params.keyword}%'
  // SELECT restaurant_name,restaurant_category,restaurant_address,restaurant_category,restaurant_img,restaurant_score,GROUP_CONCAT(service_category) AS 'service' FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id INNER JOIN restaurant_category AS rc ON rc.id = r.restaurant_category_id WHERE restaurant_name LIKE '${req.params.keyword}%' GROUP BY restaurant_name,restaurant_address,restaurant_category,restaurant_img,restaurant_score
  conn.query(
    `SELECT restaurant_name,restaurant_category,restaurant_address,restaurant_category,restaurant_img,restaurant_score,GROUP_CONCAT(service_category) AS 'service' FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id INNER JOIN restaurant_category AS rc ON rc.id = r.restaurant_category_id WHERE restaurant_name LIKE '${req.params.keyword}%' GROUP BY restaurant_name,restaurant_category,restaurant_address,restaurant_img,restaurant_score`,
    [req.params.keyword],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/search/area/:area", function (req, res) {
  conn.query(
    `SELECT restaurant_name,restaurant_category,restaurant_address,restaurant_img,restaurant_score,GROUP_CONCAT(service_category) AS 'service' FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id INNER JOIN restaurant_category AS rc ON rc.id = r.restaurant_category_id WHERE restaurant_address LIKE '${req.params.area}%' GROUP BY restaurant_name,restaurant_category,restaurant_address,restaurant_img,restaurant_score`,
    [req.params.area],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/search/service/:service", function (req, res) {
  conn.query(
    `SELECT restaurant_name,restaurant_category,restaurant_address,restaurant_img,restaurant_score,GROUP_CONCAT(service_category) AS 'service' FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id INNER JOIN restaurant_category AS rc ON rc.id = r.restaurant_category_id WHERE service_category LIKE '${req.params.service}%' GROUP BY restaurant_name,restaurant_category,restaurant_address,restaurant_img,restaurant_score`,
    [req.params.service],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/search/:area/:service", function (req, res) {
  conn.query(
    `SELECT restaurant_name,restaurant_category,restaurant_address,restaurant_img,restaurant_score,GROUP_CONCAT(service_category) AS 'service' FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id INNER JOIN restaurant_category AS rc ON rc.id = r.restaurant_category_id WHERE restaurant_address LIKE '${req.params.area}%' AND service_category LIKE '${req.params.service}%' GROUP BY restaurant_name,restaurant_category,restaurant_address,restaurant_img,restaurant_score`,
    [req.params.area, req.params.service],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/orderpage", function (req, res) {
  conn.query(
    "SELECT food_name,food_amount,food_category FROM menu JOIN food_category ON menu.food_category_id= food_category.id",
    [],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/orderpage/group_order/1", function (req, res) {
  conn.query(
    "SELECT food_name,food_amount,food_category FROM menu JOIN food_category ON menu.food_category_id= food_category.id",
    [],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

// app.get("/orderpage/:food_category", function (req, res) {
//   conn.query(
//     "SELECT * FROM menu AS m INNER JOIN food_category AS fc ON m.food_category_id = fc.id WHERE food_category = ?",
//     [req.params.food_category],
//     function (err, rows) {
//       res.send(JSON.stringify(rows));
//     }
//   );
// });

app.post("/restaurant/login", (req, res) => {
  const query =
    "SELECT restaurant_pwd from restaurant_account where unified_compilation = ?";
  const params = req.body.unified_compilation;
  connection.query(query, params, async (err, rows) => {
    if (err) throw err;
    var output = {};
    const result = await JSON.parse(JSON.stringify(rows));
    if (req.body.restaurant_pwd == result[0].restaurant_pwd) {
      output["status"] = "0";
      output["message"] = "??????????????????";
    } else {
      output["status"] = "1";
      output["message"] = "??????????????????";
    }
    res.json(output);
  });
});

app.get("/restaurant/booking/today", (req, res) => {
  conn.query(
    `SELECT member.id, booking_date, booking_time, booking_peoplenumber, user_id, user_name, user_tel, booking.id FROM booking JOIN member ON booking.user_id = member.id WHERE member.id=1 ORDER BY booking.id DESC`,
    [req.params.area, req.params.service],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  );
});

app.get("/memberinfo", (req, res) => {
  conn.query(
    `SELECT user_name, user_tel, user_email FROM member`,
    [],
    function (err, rows) {
      res.send(JSON.stringify(rows));
    }
  )
})
