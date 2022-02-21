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
        return;
    }
    console.log("connection success");
})

// 設定 CORS
const corsOptions = {
    origin: "*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    conn.query("select * from member", [],
        function (err, rows) {
            res.send(JSON.stringify(rows));
        }
    )
})

app.get('/login', (req, res) => {
    res.send("hello")
})

app.post('/login', (req, res) => {
    res.send("KKK");
})

app.post('/register', (req, res) => {
    try {
        let result = {};
        // 尋找是否有重複的email
        connection.query('SELECT user_email FROM member WHERE user_email = ?', req.body.user_email, async function (err, rows) {
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
                if (req.body.user_pwd !== req.body.user_pwd_confirm) {
                    result["status"] = "註冊失敗。";
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
})

app.listen(8000);