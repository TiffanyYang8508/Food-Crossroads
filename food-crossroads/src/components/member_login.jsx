import React, { Component } from 'react';

import $ from "jquery";
import Header from './header';
import Footer from './footer';
import Axios from "axios";
import "../fontawesome-free-5.15.4-web/css/all.min.css";
import "../css/style.css";
import "../css/member_login.css"


class Member_login extends Component {
    state = {}

    componentDidMount() {
        $(".dropdown_label").click(function (e) {
            e.preventDefault();
            $(this).parent().find(".dropdown_div").slideToggle();
            $(this).parent().siblings().find(".dropdown_div").slideUp();
        });
    }

    loginClick = async () => {
        console.log("Ok");
        window.location = "http://localhost:8000/login";
    }

    render() {
        return (
            <React.Fragment>

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
                                        <input type="text" id="email" className="form_account" name="email" placeholder="請輸入您的信箱" />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" className="form_secret"></label>
                                        <input type="password" id="password" className="form_secret" name="password" placeholder="請輸入您的密碼" />
                                    </div>
                                    <div className="form-group row">
                                        <input type="button" className="btn_member_login" value="登入"
                                        onClick={this.loginClick} />
                                    </div>
                                    <div className="form-group row">
                                        <div className="span_container">
                                            <div><a href="#forgot_password">忘記密碼?</a></div>
                                            <div>
                                                <input type="checkbox" name="automatically_login" id="automatically_login" />
                                                <span>自動登入</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <input type="button" className="btn_register" value="立即註冊" />
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

export default Member_login;