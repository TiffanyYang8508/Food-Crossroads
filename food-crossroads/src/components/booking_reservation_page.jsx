import React, { Component } from 'react';
import Footer from "./footer";
import logo from "../img/logo.png";
import $ from "jquery";
import "../css/booking_reservation_page.css";
import "../css/bootstrap.min.css";
import "../css/progress.css";

class Booking_reservation_page extends Component {
    state = {}

    componentDidMount() {
        $(".reservation_input_next").on("click", function() {
            $(window.location).prop("href", "/booking/check/page");
        })
    }


    render() {
        return (
            <React.Fragment>
                <header id="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/">
                        <img src={logo} alt="LOGO" />
                        </a>
                        <div className="nav_icon">
                        <a className="nav_a" href="/restaurant/list">
                            <i className="fas fa-store"></i>餐廳列表
                        </a>
                        <a className="nav_a" href="/orderpage">
                            <i className="fas fa-shopping-cart"></i>購物車
                        </a>
                        <a className="nav_a" href="/member/1">
                            <i className="fas fa-user-circle"></i>李曉明
                        </a>
                        </div>
                        <div className="rwd_icon">
                        <a className="nav_a" href="/restaurant/list">
                            <i className="fas fa-store"></i>
                        </a>
                        <a className="nav_a" href="/orderpage">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                        <a className="nav_a" href="/member/:id">
                            <i className="fas fa-user-circle"></i>
                        </a>
                        </div>
                    </nav>
                </header>
                <section id="booking_reservation_page">
                    <div className="container">
                        <div className="row">
                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html"><span>首頁</span></a></li>
                                    <li className="breadcrumb-item"><a href="list.html"><span>餐廳列表</span></a></li>
                                    <li className="breadcrumb-item"><a href="restaurant_page_login_ok.html"><span>aqua 水相餐廳</span></a></li>
                                    <li className="breadcrumb-item active" aria-current="page"><span>訂位</span></li>
                                </ul>
                            </nav>
                            <div className="progress_container">
                                <ul className="progress_ul">
                                    <li className="active"><span>預約</span></li>
                                    <li><span>確認</span></li>
                                    <li><span>完成</span></li>
                                </ul>
                            </div>
                            <div className="reservation_container">
                                <div className="reservation_info">
                                    <div className="reservation_form_title">訂位資料</div>
                                    <div className="form_container_info col-md-4">
                                        <form action="#">
                                            <div className="form-group row">
                                                <label htmlFor="reservation_info_person_number">訂位人數：</label>
                                                <select name="reservation_info_person_number" id="reservation_info_person_number">
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="reservation_info_date">訂位日期：</label>
                                                <input type="date" id="reservation_info_date" name="reservation_info_date" required />
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="reservation_info_time">訂位時間：</label>
                                                <input type="time" id="reservation_info_time" name="reservation_info_time" required />
                                            </div>
                                            <div className="form-group column demands">
                                                <label htmlFor="reservation_info_demands">需　　求：</label>
                                                <div className="chk_css">
                                                    <span className='chk_item'>
                                                        <input className="chk_chk" type="checkbox" name="child_seats" id="child_seats" value="2" />
                                                        <label htmlFor="child_seats">嬰兒座椅</label>
                                                    </span>
                                                    <span className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="parking" id="parking" value="2" />
                                                        <label htmlFor="parking">停車</label>
                                                    </span>
                                                    <span className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="allow_pets" id="allow_pets" value="2" />
                                                        <label htmlFor="allow_pets">攜帶寵物</label>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="reservation_info_remark">備　　註：</label>
                                                <input type="text" id="reservation_info_remark" name="reservation_info_remark" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="reservation_person">
                                    <div className="reservation_form_title">訂位人</div>
                                    <div className="form_container_person col-md-6">
                                        <form action="#">
                                            <div className="form-group row">
                                                <label htmlFor="reservation_person_name"><span>姓　　名：</span><span>李曉明</span></label>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="reservation_person_cellphone"><span>手機號碼：</span><span>0987654321</span></label>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="reservation_person_email"><span>信　　箱：</span><span>1234@gmail.com</span></label>
                                            </div>
                                            <input type="button" className="reservation_input_next" value="下一步：訂位確認" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </section>


                <div className="footer_page">
                    <Footer />
                </div>

            </React.Fragment>
        );
    }
}

export default Booking_reservation_page;