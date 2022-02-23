import React, { Component } from 'react';
import Axios from "axios";
import $ from "jquery";
import Header from './header';
import Footer from './footer';
import "../fontawesome-free-5.15.4-web/css/all.min.css";
import "../css/style.css";
import "../css/member_login.css"


class Member_login extends Component {
    state = {
        member: { user_email: "", user_pwd: "" }
    }
    loginClick = async () => {
        console.log("OK");
        await new Axios.post("http://localhost:8000/login", this.state.member)
            .then((res) => {
                if (res.data.status !== "1") {
                    $("#reportMessage").text(res.data.message);
                }
            })
            .catch((error) => { console.error(error) });
        
    }

    inputEmail = (e) => {
        var newState = { ...this.state };
        newState.member.user_email = e.target.value;
        this.setState(newState);
    }

    inputPwd = (e) => {
        var newState = { ...this.state };
        newState.member.user_pwd = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <>

                <header className="header_page">
                    <Header />
                </header>

                <div className="container">
                    <div className="row">
                        <div className="member_login_container">
                            <div className="member_login_title">
                                <i className="fas fa-user-circle"></i>會員登入
                            </div>
                            <div className="member_form">
                                <form action="#">
                                    <div className="form-group row">
                                        <label htmlFor="email" className="form_account"></label>
                                        <input type="text" id="email" className="form_account" placeholder="請輸入您的信箱"
                                            value={this.state.member.user_email}
                                            onChange={this.inputEmail} />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" className="form_secret"></label>
                                        <input type="password" id="password" className="form_secret" placeholder="請輸入您的密碼"
                                            value={this.state.member.user_pwd}
                                            onChange={this.inputPwd} />
                                    </div>
                                    <div className="form-group row">
                                        <input type="button" className="btn_member_login" value="登入"
                                            onClick={this.loginClick} />
                                    </div>
                                    <div className="form-group row">
                                        <div className="span_container forgot">
                                            <div><a href="#forgot_password">忘記密碼?</a></div>
                                            <div>
                                                <input type="checkbox" name="automatically_login" id="automatically_login" />
                                                <span>記住密碼</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <input type="submit" className="btn_register" value="立即註冊" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="reportSpan" id='reportMessage'></div>
                    </div>
                </div>



                <footer className="footer_page">
                    <Footer />
                </footer>
            </>
        );
    }
}

export default Member_login;