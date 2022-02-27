import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";
import "../css/booking_check_page.css";
import "../css/progress.css";
import "../css/bootstrap.min.css";


class Booking_check_page extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <div className="header_page">
                    <Header />
                </div>
                <section id="booking_check_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
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
                                        <li><span>完成</span></li>
                                    </ul>
                                </div>
                                <div className="check_container">
                                    <div className="check_person">
                                        <div className="check_form_title">訂位資料是否正確？</div>
                                        <div className="form_container_check_wrapper">
                                            <form action="#">
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_name">姓　　名：</label>
                                                    <label htmlFor="check_person_name">李曉明</label>
                                                </div>
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_cellphone">手　　機：</label>
                                                    <label htmlFor="check_person_cellphone">0987654321</label>
                                                </div>
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_email">姓　　名：</label>
                                                    <label htmlFor="check_person_email">askf@gmail.com</label>
                                                </div>
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_person_number">訂位人數：</label>
                                                    <label htmlFor="check_person_person_number">6人</label>
                                                </div>
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_date">訂位日期：</label>
                                                    <label htmlFor="check_person_date">2022/03/18</label>
                                                </div>
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_time">訂位時間：</label>
                                                    <label htmlFor="check_person_time">17：00</label>
                                                </div>
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_demands">需　　求：</label>
                                                    <label htmlFor="check_person_demands">停車、嬰兒座椅</label>
                                                </div>
                                                <div className="form_container_check">
                                                    <label htmlFor="check_person_remark">備　　註：</label>
                                                    <label htmlFor="check_person_remark">無</label>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="btn_container_check">
                                            !!!!!!!!!!!!!!!
                                            <a href="/index_list/booking_reservation_page.html">
                                                <input type="submit" className="check_btn_back" value="回上一步" />
                                            </a>
                                            <a href="/index_list/booking_finish_page.html">
                                                <input type="submit" className="check_btn_confirm" value="下一步：完成訂位" />
                                            </a>
                                        </div>
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

export default Booking_check_page;