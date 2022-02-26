import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Axios from "axios";
import $ from "jquery";
import "../fontawesome-free-5.15.4-web/css/all.min.css";
import "../css/style.css";
import "../css/member_register.css";

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

  handleInputVerityUsername = (e) => {
    var user_name = e.target.value;
    var messageUsername = "";

    if (!user_name) {
      messageUsername = "必填欄位!";
    }
    this.setState({
      user_name: user_name,
      messageUsername: messageUsername,
    });
  };

  handleInputVerityEmail = (e) => {
    var user_email = e.target.value;
    var messageEmail = "";

    if (!user_email) {
      messageEmail = "必填欄位!";
    }
    this.setState({
      user_email: user_email,
      messageEmail: messageEmail,
    });
  };

  handleInputVerityPassword = (e) => {
    var user_pwd = e.target.value;
    var messagePwd = "";

    if (!user_pwd) {
      messagePwd = "必填欄位!";
    }
    this.setState({
      user_pwd: user_pwd,
      messagePwd: messagePwd,
    });
  };

  handleInputVerityConfirmPwd = (e) => {
    var user_pwd_confirm = e.target.value;
    var messageConfirm = "";

    if (!user_pwd_confirm) {
      messageConfirm = "必填欄位!";
    }
    this.setState({
      user_pwd_confirm: user_pwd_confirm,
      messageConfirm: messageConfirm,
    });
  };

  handleInputVerityTel = (e) => {
    var user_tel = e.target.value;
    var messageTel = "";

    if (!user_tel) {
      messageTel = "必填欄位!";
    }
    this.setState({
      user_tel: user_tel,
      messageTel: messageTel,
    });
  };

  okButtonClick = async () => {
    await new Axios.post("http://localhost:8000/register", this.state.member)
      .then((res) => {
        switch (res.data.status) {
          case "0":
            alert(res.data.err);
            break;
          case "1":
            alert(res.data.err);
            window.location("/member/login");
            break;
          case "2":
            alert(res.data.err);
            break;
          case "3":
            alert(res.data.err);
            break;
          case "4":
            alert(res.data.err);
            break;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <>
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
                        onBlur={this.handleInputVerityUsername.bind(this)}
                      />
                    </div>
                    {this.state.messageUsername} <br />
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
                        onBlur={this.handleInputVerityEmail.bind(this)}
                      />
                    </div>
                    {this.state.messageEmail} <br />
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
                        onBlur={this.handleInputVerityPassword.bind(this)}
                      />
                    </div>
                    {this.state.messagePwd} <br />
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
                        onBlur={this.handleInputVerityConfirmPwd.bind(this)}
                      />
                    </div>
                    {this.state.messageConfirm}
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
                        onBlur={this.handleInputVerityTel.bind(this)}
                      />
                    </div>
                    {this.state.messageTel}
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
                <div className="reportSpan" id="reportMessage"></div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer_page">
          <Footer />
        </footer>
      </>
    );
  }
}

export default Member_register;
