import React, { Component } from 'react';
import Axios from "axios";
import "../fontawesome-free-5.15.4-web/css/all.min.css";
import "../css/style.css";
import "../css/member_register.css"


class Member_register extends Component {
    state = {
        member: {
            
        }
    }

    nameChange = (e) => {
        var newState = { ...this.state };
        newState.member.user_name = e.target.value;
        this.setState(newState);
    }

    emailChange = (e) => {
        var newState = { ...this.state };
        newState.member.user_email = e.target.value;
        this.setState(newState);
    }

    pwdChange = (e) => {
        var newState = { ...this.state };
        newState.member.user_pwd = e.target.value;
        this.setState(newState);
    }

    pwdConfrimChange = (e) => {
        var newState = { ...this.state };
        newState.member.user_pwd_confirm = e.target.value;
        this.setState(newState);
    }

    telChange = (e) => {
        var newState = { ...this.state };
        newState.member.user_tel = e.target.value;
        this.setState(newState);
    }

    okButtonClick = async () => {
        console.log("OK1");
        await new Axios.post("http://localhost:8000/register", this.state.member)
            .then((res) => { console.table(res.data) })
            .catch((error) => { console.error(error) });
        console.log("OK2");
    }

    render() {
        return (
            <React.Fragment>

                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="index.html"><img src={require('../img/logo.png')} alt="LOGO" /></a>
                        <div className="nav_icon">
                            <a className="nav_a" href="list.html"><i className="fas fa-store"></i>餐廳列表</a>
                            <a className="nav_a" href="shoppingchar.html"><i className="fas fa-shopping-cart"></i>購物車</a>
                            <a className="nav_a" href="member_login.html"><i className="fas fa-user-circle"></i>會員登入</a>
                        </div>
                        <div className="rwd_icon">
                            <a className="nav_a" href="list.html"><i className="fas fa-store"></i></a>
                            <a className="nav_a" href="shoppingchar.html"><i className="fas fa-shopping-cart"></i></a>
                            <a className="nav_a" href="member_login.html"><i className="fas fa-user-circle"></i></a>
                        </div>
                    </nav>
                </header>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-6">
                            <div className="register_form">
                                <form action="">
                                    <div className="register_title">
                                        <span className="register_title_text"><i className="fas fa-user-circle"></i>會員註冊</span>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="form_text">姓名</label>
                                        <div className="input_box">
                                            <input type="text" id="name" className="form-control" name="name"
                                                value={this.state.member.user_name}
                                                onChange={this.nameChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email" className="form_text">信箱</label>
                                        <div className="input_box">
                                            <input type="text" id="email" className="form-control" name="email"
                                                value={this.state.member.user_email}
                                                onChange={this.emailChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="password" className="form_text">密碼</label>
                                        <div className="input_box">
                                            <input type="password" id="password" className="form-control" name="password"
                                                value={this.state.member.user_pwd}
                                                onChange={this.pwdChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row password_confirm">
                                        <label htmlFor="password_confirm" className="form_text">確認密碼</label>
                                        <div className="input_box">
                                            <input type="password" id="password_confirm" className="form-control" name="password_confirm"
                                                value={this.state.member.user_psw_confirm}
                                                onChange={this.pswConfrimChange} />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="tel" className="form_text">手機</label>
                                        <div className="input_box">
                                            <input type="text" id="tel" className="form-control" name="tel"
                                                value={this.state.member.user_tel}
                                                onChange={this.telChange} />
                                        </div>
                                    </div>
                                    <div className="btn_div">
                                        <button type="button" onClick={this.okButtonClick} className="register_btn">註冊</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="footer_link">
                        <a href="#">關於我們</a>
                        <a href="#">商家入口</a>
                        <a href="#">常見問題</a>
                        <a href="#">聯絡我們</a>
                    </div>
                    <div className="footer_text">
                        <p>Copyright &copy; 2022 FoodCrossesRoads.All Rights Reserved.</p>
                    </div>
                </footer>

            </React.Fragment>
        );
    }
}

export default Member_register;