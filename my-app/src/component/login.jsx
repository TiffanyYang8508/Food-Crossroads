import React, { Component } from "react";
import "../style/css/login.css";
import "../style/css/style.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <body>
        <div class="header_page"></div>

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

        <div class="footer_page"></div>
      </body>
    );
  }
}

export default Login;
