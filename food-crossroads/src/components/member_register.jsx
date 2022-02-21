import React, { Component, useEffect } from "react";
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import "../css/style.css";
import "../css/member_register.css";
import res from "express/lib/response";

class Member_register extends Component {
  state = {
    member: {
      user_name: "",
      user_email: "",
      user_pwd: "",
      user_pwd_confirm: "",
      user_tel: "",
    },
  };

  nameChange = (e) => {
    var newState = { ...this.state };
    newState.member.user_name = e.target.value;
    this.setState(newState);
  };

  emailChange = (e) => {
    var newState = { ...this.state };
    newState.member.user_email = e.target.value;
    this.setState(newState);
  };

  pwdChange = (e) => {
    var newState = { ...this.state };
    newState.member.user_pwd = e.target.value;
    this.setState(newState);
  };

  pwdConfrimChange = (e) => {
    var newState = { ...this.state };
    newState.member.user_pwd_confirm = e.target.value;
    this.setState(newState);
  };

  telChange = (e) => {
    var newState = { ...this.state };
    newState.member.user_tel = e.target.value;
    this.setState(newState);
  };

  okButtonClick = async () => {
    console.log("OK");
    await new Axios.post("http://localhost:8000/register", this.state.member)
      .then((res) => {
        console.table(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <header className="header_page">
          <Header />
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-6">
              <div className="register_form">
                <form action="">
                  <div className="register_title">
                    <span className="register_title_text">
                      <i className="fas fa-user-circle"></i>會員註冊
                    </span>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="name" className="form_text">
                      姓名
                    </label>
                    <div className="input_box">
                      <input
                        type="text"
                        id="name"
                        className="form-control"
                        name="name"
                        value={this.state.member.user_name}
                        onChange={this.nameChange}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="email" className="form_text">
                      信箱
                    </label>
                    <div className="input_box">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        name="email"
                        value={this.state.member.user_email}
                        onChange={this.emailChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="password" className="form_text">
                      密碼
                    </label>
                    <div className="input_box">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        value={this.state.member.user_pwd}
                        onChange={this.pwdChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row password_confirm">
                    <label htmlFor="password_confirm" className="form_text">
                      確認密碼
                    </label>
                    <div className="input_box">
                      <input
                        type="password"
                        id="password_confirm"
                        className="form-control"
                        name="password_confirm"
                        value={this.state.member.user_pwd_confirm}
                        onChange={this.pwdConfrimChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="tel" className="form_text">
                      手機
                    </label>
                    <div className="input_box">
                      <input
                        type="text"
                        id="tel"
                        className="form-control"
                        name="tel"
                        value={this.state.member.user_tel}
                        onChange={this.telChange}
                      />
                    </div>
                  </div>
                  <div className="btn_div">
                    <button
                      type="button"
                      onClick={this.okButtonClick}
                      className="register_btn"
                    >
                      註冊
                    </button>
                  </div>
                </form>
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

export default Member_register;
