import React, { Component } from "react";
import "../style/css/login.css";
import "../style/css/style.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      <body>
        <div class="header_page">
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="index.html">
                <img src={require("../style/img/logo.png")} alt="LOGO" />
              </a>
              <div class="nav_icon">
                <a class="nav_a" href="list.html">
                  <i class="fas fa-store"></i>餐廳列表
                </a>
                <a class="nav_a" href="shoppingchar.html">
                  <i class="fas fa-shopping-cart"></i>購物車
                </a>
                <a class="nav_a" href="member_login.html">
                  <i class="fas fa-user-circle"></i>會員登入
                </a>
              </div>
              <div class="rwd_icon">
                <a class="nav_a" href="list.html">
                  <i class="fas fa-store"></i>
                </a>
                <a class="nav_a" href="shoppingchar.html">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a class="nav_a" href="member_login.html">
                  <i class="fas fa-user-circle"></i>
                </a>
              </div>
            </nav>
          </header>
        </div>

        <section id="login_section">
          <div class="container-fluid default_container login_div">
            <div class="row">
              <div class="col-12">
                <form action="">
                  <div>
                    <p class="title_home_login">後台管理登入</p>
                    <br />
                  </div>
                  <div class="form-group form-inline">
                    <label for="email">帳　號:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="email@gmail.com"
                      name="email"
                    />
                  </div>
                  <div class="form-group form-inline">
                    <label for="password">密　碼:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="pwd"
                      value="******"
                      name="pwd"
                    />
                  </div>
                  <div class="member_login_div">
                    <a href="#">忘記密碼?</a>
                    <div>
                      <label for="auto-login">自動登入</label>
                      <input type="checkbox" id="auto-login" />
                    </div>
                  </div>
                  <div class="btn_home_login">
                    <button class="login_btn">登入</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div class="footer_page">
        <footer>
            <div class="footer_link">
              <a href="#">關於我們</a>
              <a href="#">商家入口</a>
              <a href="#">常見問題</a>
              <a href="#">聯絡我們</a>
            </div>
            <div class="footer_text">
              <p>Copyright &copy; 2022 FoodCrossesRoads.All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </body>
      </React.Fragment>
    );
  }
}

export default Login;
