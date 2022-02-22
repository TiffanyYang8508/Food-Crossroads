import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../fontawesome-free-5.15.4-web/css/all.min.css";
import "../css/style.css";
import "../css/restaurant_login.css"


class Restaurant_login extends Component {
    state = {
        restaurant: { unified_compilcation: "test", restaurant_pwd: "***" }
    }

    inputAccount = (e) => {
        var newState = {...this.state};
        newState.restaurant.unified_compilcation = e.target.value;
        this.setState(newState);
    }

    inputPwd = (e) => {
        var newState = {...this.state};
        newState.restaurant.restaurant_pwd = e.target.value;
        this.setState(newState);
    }

    loginClick = (e) => {
        console.log("loginclick")
    }

    render() {
        return (
            <React.Fragment>

                <header className="header_page">
                    <Header />
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="restaurant_login_container">
                                <div className="restaurant_login_title">
                                    <i className="fas fa-user-circle"></i>後台管理登入
                                </div>
                                <div className="restaurant_form">
                                    <form action="" method="">
                                        <div className="form-group row">
                                            <label htmlFor="account" className="form_account"></label>
                                            <input type="text" id="account" name="account" className="form_account" placeholder="請輸入您的帳號"
                                                value={this.state.restaurant.unified_compilcation}
                                                onChange={this.inputAccount} />
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="password" className="form_secret"></label>
                                            <input type="password" id="password" name="password" className="form_secret" placeholder="請輸入您的密碼"
                                                value={this.state.restaurant.restaurant_pwd}
                                                onChange={this.inputPwd} />
                                        </div>
                                        <div className="form-group row">
                                            <input type="button" onClick={this.loginClick} className="btn_member_login" value="登入" />
                                        </div>
                                        <div className="form-group row">
                                            <div className="span_container forgot">
                                                <div><a href="#forgot_password">忘記密碼?</a></div>
                                                <div>
                                                    <input type="checkbox" name="remember_password" id="remember_password" />
                                                    <span>記住密碼</span>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer_page">
                    <Footer />
                </footer>

            </React.Fragment>
        );
    }
}

export default Restaurant_login;