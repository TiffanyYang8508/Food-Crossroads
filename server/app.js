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

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

const mysql = require("mysql");
const { json, send } = require("express/lib/response");
const conn = mysql.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  port: 3306,
  database: "food_crossroads",
  multipleStatements: true,
});

conn.connect(function (err) {
  if (error) {
    console.log(JSON.stringify(error));
    return;
  }
  console.log("connection success");
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
  // let { error } = registerValidation(req.body);
  // if (error) {
  //   if (error.details[0].context.key === "email") {
  //     return res.send(error);
  //   } else if (error.details[0].context.key === "password") {
  //     return res.send(error);
  //   }
  // }

  try {
    let result = {};
    // 尋找是否有重複的email
    connection.query('SELECT user_email FROM member WHERE user_email = ?', req.body.user_email, async function (err, rows) {
      // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
      if (err) {
        console.log(err);
        result["status"] = "0";
        result["err"] = "伺服器錯誤，請稍後在試！";
        res.json(result);
      }
      // 如果有重複的email
      if (rows.length >= 1) {
        result["status"] = "0";
        result["err"] = "已有重複的Email";
        res.json(result);
      } else {
        if (req.body.user_pwd !== req.body.user_pwd_confirm) {
          result["status"] = "0";
          result["err"] = "密碼不相同";
          res.json(result);
        } else {
          // 將資料寫入資料庫
          const hashedPassword = await bcrypt.hash(req.body.user_pwd, 10);
          connection.query(
            'INSERT INTO `member`(`user_name`, `user_email`, `user_pwd`, `user_tel`) VALUES (?, ?, ?, ?)',
            [req.body.user_name, req.body.user_email, hashedPassword, req.body.user_tel]
          );
          // res.send('register success');
          res.redirect('./login')
        }
      }
    })

  } catch {
    res.send('register fail')
  }
});

app.post('/login', (req, res) => {
  const query = "SELECT user_pwd from member where user_email=?";
  const params = req.body.user_email
  connection.query(query, params, async (err, rows) => {
    if (err) throw err;
    var output = {}
    if (rows.length != 0) {
      // console.log(rows[0]['user_pwd']);
      var password_hash = rows[0]['user_pwd'];
      const verified = bcrypt.compareSync(req.body.user_pwd, password_hash);
      if (verified) {
        output["status"] = "1";
        output["message"] = "正確帳號密碼"
      } else {
        output["status"] = "0";
        output["message"] = "錯誤密碼";
      }
    } else {
      output["message"] = "輸入錯誤信箱及密碼";
    }
    res.json(output)
  });
})

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

app.get("/service", function (req, res) {
  // SELECT r.restaurant_name,r.restaurant_address,GROUP_CONCAT(s.service_category SEPARATOR ',') FROM restaurant AS r INNER JOIN restaurant_service AS rs ON r.restaurant.id = rs.restaurant_service.restaurant_id INNER JOIN service AS s ON rs.restaurant_service.service_id = s.service.id GROUP BY r.restaurant_name
  // SELECT restaurant_name,restaurant_address,GROUP_CONCAT(service_category) AS 'service' FROM restaurant_service AS rs INNER JOIN service AS s ON rs.service_id = s.id INNER JOIN restaurant AS r ON r.id = rs.restaurant_id GROUP BY restaurant_name,restaurant_address
  conn.query("SELECT restaurant_name,restaurant_address,service_category FROM restaurant AS r INNER JOIN restaurant_service AS rs ON r.id = rs.restaurant_id INNER JOIN service AS s ON rs.service_id = s.id",
    [],
    function (err, rows) {
      res.send(JSON.stringify(rows))
    }
  );
});

app.get("/orderpage/:id", function (req, res) {
  conn.query(
    "SELECT * FROM menu INNER JOIN restaurant ON menu.restaurant.id = restaurant.id WHERE restaurant.id =?",
    [req.params.restaurant_id],
    function (err, rows) {
      res.send(JSON.stringify(rows[0]));
    }
  );
});

app.post('/restaurant/login', (req, res) => {
  const query = "SELECT restaurant_pwd from restaurant_account where unified_compilation = ?";
  const params = req.body.unified_compilation;
  connection.query(query, params, async (err, rows) => {
    if (err) throw err;
    var output = {}
    const result = await JSON.parse(JSON.stringify(rows));
    if (req.body.restaurant_pwd == result[0].restaurant_pwd) {
      output["status"] = "0";
      output["message"] = "正確帳號密碼";
    } else {
      output["status"] = "1";
      output["message"] = "錯誤帳號密碼";
    }
    res.json(output)
  });
})