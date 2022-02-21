import React, { Component } from "react";
import "../css/member_login.css";
import "../css/style.css";

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
                  <img src={require("../img/logo.png")} alt="LOGO" />
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

          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="member_login_container">
                  <div class="member_login_title">
                    <i class="fas fa-user-circle"></i>會員登入
                  </div>
                  <div class="member_form">
                    <form action="" method="">
                      <div class="form-group row">
                        <label for="account" class="form_account"></label>
                        <input
                          type="text"
                          id="account"
                          class="form_account"
                          placeholder="請輸入您的帳號"
                        />
                      </div>
                      <div class="form-group row">
                        <label for="secret" class="form_secret"></label>
                        <input
                          type="password"
                          id="secret"
                          class="form_secret"
                          placeholder="請輸入您的密碼"
                        />
                      </div>
                      <div class="form-group row">
                        <input
                          type="submit"
                          class="btn_member_login"
                          value="登入"
                        />
                      </div>
                      <div class="form-group row">
                        <div class="span_container">
                          <div>
                            <a href="#forgot_password">忘記密碼?</a>
                          </div>
                          <div>
                            <input
                              type="checkbox"
                              name="remember_password"
                              id="remember_password"
                            />
                            <label for="remember_password">記住密碼</label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="footer_page">
            <footer>
              <div class="footer_link">
                <a href="#">關於我們</a>
                <a href="#">商家入口</a>
                <a href="#">常見問題</a>
                <a href="#">聯絡我們</a>
              </div>
              <div class="footer_text">
                <p>
                  Copyright &copy; 2022 FoodCrossesRoads.All Rights Reserved.
                </p>
              </div>
            </footer>
          </div>
        </body>
      </React.Fragment>
    );
  }
}

export default Login;