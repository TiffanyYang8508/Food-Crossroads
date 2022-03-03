import React, { Component } from 'react';
import Footer from './footer';
import logo from "../img/logo.png";
import "../css/booking_finish_page.css";

class Booking_finish_page extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <header className="header_page">
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
                <section id="booking_finish_page">
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
                                    <li className="active"><span>確認</span></li>
                                    <li className="active"><span>完成</span></li>
                                </ul>
                            </div>
                            <div className="finish_container">
                                <div className="finish_person">
                                    <div className="finish_form_title">訂位已完成</div>
                                    <div className="finish_form_show">您的訂位編號：<span>00001</span></div>
                                    <div className="form_container_finish_wrapper">
                                        <form action="#">
                                            <div className="form_container_finish_wrapper_left">
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_name">姓　　名：</label>
                                                    <label htmlFor="finish_person_name">李曉明</label>
                                                </div>
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_cellphone">手　　機：</label>
                                                    <label htmlFor="finish_person_cellphone">0987654321</label>
                                                </div>
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_email">信　　箱：</label>
                                                    <label htmlFor="finish_person_email">1234@gmail.com</label>
                                                </div>
                                            </div>
                                            <div className="form_container_finish_wrapper_right">
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_person_number">訂位人數：</label>
                                                    <label htmlFor="finish_person_person_number">6人</label>
                                                </div>
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_date">訂位日期：</label>
                                                    <label htmlFor="finish_person_date">2022/03/07</label>
                                                </div>
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_time">訂位時間：</label>
                                                    <label htmlFor="finish_person_time">12：00</label>
                                                </div>
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_demands">需　　求：</label>
                                                    <label htmlFor="finish_person_demands">停車、嬰兒座椅</label>
                                                </div>
                                                <div className="form_container_finish">
                                                    <label htmlFor="finish_person_remark">備　　註：</label>
                                                    <label htmlFor="finish_person_remark">無</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="btn_container_finish">
                                        <a href="/bookingmanagement/:id">
                                            <input type="button" className="finish_btn_booking_manage" value="訂位管理" />
                                        </a>
                                        <a href="/restaurant/page/member">
                                            <input type="button" className="finish_btn_to_restaurant_page" value="回到餐聽" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="footer_page">
                    <Footer />
                </div>

            </React.Fragment>
        );
    }
}

export default Booking_finish_page;