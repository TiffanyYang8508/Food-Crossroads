import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";
import $ from "jquery";
import "../css/booking_reservation_page.css";
import "../css/bootstrap.min.css";


class Booking_reservation_page extends Component {
    state = {  }
    
    componentDidMount() {

       
    }
    render() { 
        return (
            <React.Fragment>
                <div className="header_page">
                    <Header />
                </div>

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
                                <div className="form_container_info col-md-6">
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
                                        <div className="form-group column">
                                            <label htmlFor="reservation_info_demands">需　　求：</label>
                                            <div className="chk_css">
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="barrier_free" id="barrier_free" value="2" />
                                                    <label htmlFor="barrier_free">無障礙設施</label>
                                                    <input className="chk_chk" type="checkbox" name="child_seats" id="child_seats" value="2" />
                                                    <label htmlFor="child_seats">嬰兒座椅</label>
                                                    <input className="chk_chk" type="checkbox" name="min_consumption" id="min_consumption" value="2" />
                                                    <label htmlFor="min_consumption">最低消費</label>
                                                </div>
                                                <div className="chk_item">
                                                    <input className="chk_chk" type="checkbox" name="delivery" id="delivery" value="2" />
                                                    <label htmlFor="delivery">外送</label>
                                                    <input className="chk_chk" type="checkbox" name="service_free" id="service_free" value="2" />
                                                    <label htmlFor="service_free">服務費</label>
                                                    <input className="chk_chk" type="checkbox" name="parking" id="parking" value="2" />
                                                    <label htmlFor="parking">停車</label>
                                                    <input className="chk_chk" type="checkbox" name="allow_pets" id="allow_pets" value="2" />
                                                    <label htmlFor="allow_pets">攜帶寵物</label>
                                                </div>

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
                                            <label htmlFor="reservation_person_name"><span>姓　　名：</span></label>
                                            <input type="text" id="reservation_person_name" name="reservation_person_name"
                                                value="李曉明" placeholder="請輸入您的姓名" required />
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="reservation_person_cellphone"><span>手機號碼：</span></label>
                                            <input type="tel" id="reservation_person_cellphone" name="reservation_person_cellphone"
                                                value="0987654321"
                                                placeholder="09XXXXXXXX" pattern="[0][9][0-9]{2}-[0-9]{3}-[0-9]{3}"
                                                required />
                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="reservation_person_email"><span>信　　箱：</span></label>
                                            <input type="email" id="reservation_person_email" name="reservation_person_email"
                                                value="askf@gmail.com"
                                                placeholder="your_email@gmail.com" required />
                                        </div>
                                        <input type="submit" className="reservation_input_next" value="下一步：訂位確認" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer_page">
                    <Footer />
                </div>

            </React.Fragment>
        );
    }
}
 
export default Booking_reservation_page;