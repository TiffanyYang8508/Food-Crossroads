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

app.post('/register', (req, res) => {
    conn.query("insert into member (user_name, user_email, user_pwd, user_tel) values (?, ?, ?, ?)", 
    [req.body.name, req.body.email, req.body.password, req.body.tel],
    function (err, rows) {
        res.send( JSON.stringify( req.body ));
    }
)
})

app.listen(8000);