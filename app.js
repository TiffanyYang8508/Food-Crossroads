<<<<<<< HEAD
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
=======
const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const path = require("path");

const bodyParser = require('body-parser');
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

var xhr = new XMLHttpRequest()
xhr.open("POST", "http://localhost:3000")
xhr.addEventListener('readystatechange', function (e) {
    if (e.target.readyState === 4 && e.target.status === 200) {
        //....

    } else if (e.target.readyState === 4) {
        //....
    }
});
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

const mysql = require("mysql");
const { throws } = require("assert");
const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host: "127.0.0.1",
    port: 3306,
    database: "food_crossroads"
})
connection.connect((error) => {
    if (error) {
        console.log(JSON.stringify(error));
        return
    }
    console.log("connection success");
})

app.get('/', (req, res) => {

})

app.get('/login', (req, res) => {

})

app.post('/login', (req, res) => {
    const query = "SELECT user_pwd from member where user_email=?";
    const params = req.body.email
    connection.query(query, params, async (err, rows) => {
        if (err) throw err;
        var output = {}
        if (rows.length != 0) {
            // console.log(rows[0]['user_pwd']);
            var password_hash = rows[0]['user_pwd'];
            const verified = bcrypt.compareSync(req.body.password, password_hash);
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

app.get('/register', (req, res) => {

})
app.post('/register', async (req, res) => {
    try {
        let result = {};
        // 尋找是否有重複的email
        connection.query('SELECT user_email FROM member WHERE user_email = ?', req.body.email, async function (err, rows) {
            // 若資料庫部分出現問題，則回傳給client端「伺服器錯誤，請稍後再試！」的結果。
            if (err) {
                console.log(err);
                result["status"] = "註冊失敗。";
                result["err"] = "伺服器錯誤，請稍後在試！";
                res.json(result);
            }
            // 如果有重複的email
            if (rows.length >= 1) {
                result["status"] = "註冊失敗。";
                result["err"] = "已有重複的Email。";
                res.json(result);
            } else {
                if (req.body.password !== req.body.password_confirm) {
                    result["status"] = "註冊失敗。";
                    result["err"] = "密碼不相同";
                    res.json(result);
                } else {
                    // 將資料寫入資料庫
                    const hashedPassword = await bcrypt.hash(req.body.password, 10);
                    connection.query(
                        'INSERT INTO `member`(`user_name`, `user_email`, `user_pwd`, `user_tel`) VALUES (?, ?, ?, ?)',
                        [req.body.name, req.body.email, hashedPassword, req.body.tel]
                    );
                    // res.send('register success');
                    res.redirect('./login')
                }
            }
        })

    } catch {
        res.send('register fail')
    }
})

app.listen(8000);
>>>>>>> 55bc134959d10213940cfed45a1bc14844740209
