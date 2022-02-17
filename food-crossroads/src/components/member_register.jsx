import React, { Component } from 'react';
import Axios from "axios";
import "../fontawesome-free-5.15.4-web/css/all.min.css";
import "../css/style.css";
import "../css/member_register.css"


class Member_register extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <header>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="index.html"><img src={require('../img/logo.png')} alt="LOGO" /></a>
                        <div class="nav_icon">
                            <a class="nav_a" href="list.html"><i class="fas fa-store"></i>餐廳列表</a>
                            <a class="nav_a" href="shoppingchar.html"><i class="fas fa-shopping-cart"></i>購物車</a>
                            <a class="nav_a" href="member_login.html"><i class="fas fa-user-circle"></i>會員登入</a>
                        </div>
                        <div class="rwd_icon">
                            <a class="nav_a" href="list.html"><i class="fas fa-store"></i></a>
                            <a class="nav_a" href="shoppingchar.html"><i class="fas fa-shopping-cart"></i></a>
                            <a class="nav_a" href="member_login.html"><i class="fas fa-user-circle"></i></a>
                        </div>
                    </nav>
                </header>

                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-6">
                            <div class="register_form">
                                <form action="">
                                    <div class="register_title">
                                        <span class="register_title_text"><i class="fas fa-user-circle"></i>會員註冊</span>
                                    </div>
                                    <div class="form-group row">
                                        <label for="name" class="form_text">姓名</label>
                                        <div class="input_box">
                                            <input type="text" id="name" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email" class="form_text">信箱</label>
                                        <div class="input_box">
                                            <input type="text" id="email" class="form-control" name="email" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="password" class="form_text">密碼</label>
                                        <div class="input_box">
                                            <input type="text" id="password" class="form-control" name="password" />
                                        </div>
                                    </div>

                                    <div class="form-group row password_confirm">
                                        <label for="password_confirm" class="form_text">確認密碼</label>
                                        <div class="input_box">
                                            <input type="text" id="password_confirm" class="form-control" name="password_confirm" />
                                        </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="phone_number" class="form_text">手機</label>
                                        <div class="input_box">
                                            <input type="text" id="phone_number" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="btn_div">
                                        <button class="register_btn">註冊</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

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

            </React.Fragment>
        );
    }
}

export default Member_register;