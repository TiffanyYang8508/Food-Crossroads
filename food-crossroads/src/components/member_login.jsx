import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/member_login.css";
import "../css/style.css";

class Login extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <header className="header_page">
          <Header />
        </header>

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

        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default Login;
