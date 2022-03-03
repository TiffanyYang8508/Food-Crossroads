import React, { Component } from 'react';
import Axios from "axios";
import logo from "../img/logo.png";
import Footer from "./footer";
import $ from "jquery";
import "../css/restaurant_booking_today.css"
import Collapse from "react-bootstrap/Collapse";

class Restaurant_booking_today extends Component {
    state = {
        booking_detail: [
            {
                booking_date: "2022-09-22",
                booking_time: "17:00",
                booking_peoplenumber: "3",
                user_name: "陳冠維",
                user_tel: "0972607230"
            }
        ],
        open: true
    }

    async componentDidMount() {
        // var url = `http://localhost:8000/restaurant/booking/today`;
        // var result = await Axios.get(url);
        // var newState = { ...this.state };
        // newState.booking_detail = result.data;
        // this.setState(newState);

        $(".detail_btn").on("click", function () {
            $(".modal-groupdetail").css("display", "block");
        });

        $(".btn_close").on("click", function () {
            $(".modal-groupdetail").css("display", "none");
        });

        $(".search_btn").on("click", function () {
            $(".modal-groupdetail2").css("display", "block");
        });

        $(".btn_close").on("click", function () {
            $(".modal-groupdetail2").css("display", "none");
        });

        $(".cancel_btn").on("click", function () {
            $(".modal-groupdetail3").css("display", "block");
        });

        $(".btn_close").on("click", function () {
            $(".modal-groupdetail3").css("display", "none");
        });

        $(".c_btn").on("click", function () {
            $("#test").css("display", "none");
            $(".modal-groupdetail3").css("display", "none");
        });
    }

    render() {
        return (
            <>
                <header className="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    </nav>
                </header>
                <aside id="restaurant_today_booking_aside">
                    <div className="panel panel-default">
                        <div className="panel-heading" in={this.state.open}>
                            <h4 className="panel-title"><a href="/restaurant/booking/today">訂位管理</a>
                            </h4>
                        </div>
                        <Collapse id="collapseOne" className="panel-collapse collapse default" in={this.state.open}>
                            <div className="little_title">
                                <a href="/restaurant/booking/today">今日訂位</a>
                            </div>
                        </Collapse >
                        <Collapse id="collapseOne" className="panel-collapse collapse" in={this.state.open} >
                            <div className="little_title">
                                <a href="/restaurant/booking/history">歷史訂位紀錄</a>
                            </div>
                        </Collapse>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="/restaurant/self/pick">訂餐管理</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="little_title">
                                <a data-parent="#accordion" href="">今日自取訂餐</a>
                            </div>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="little_title">
                                <a data-parent="#accordion" href="">歷史訂餐紀錄</a>
                            </div>
                        </div>
                    </div>
                </aside>

                <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
                <div id="restaurant_today_booking_mobile_aside">
                    <div className="panel panel-default">
                        <div className="panel-heading" in={this.state.open}>
                            <h4 className="panel-title"><a href="/restaurant/booking/today">訂位管理</a>
                            </h4>
                        </div>
                        <Collapse id="collapseOne" className="panel-collapse collapse default" in={this.state.open}>
                            <div className="little_title">
                                <a href="/restaurant/booking/today">今日訂位</a>
                            </div>
                        </Collapse >
                        <Collapse id="collapseOne" className="panel-collapse collapse" in={this.state.open} >
                            <div className="little_title">
                                <a href="/restaurant/booking/history">歷史訂位紀錄</a>
                            </div>
                        </Collapse>
                    </div>
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="/restaurant/self/pick">訂餐管理</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="little_title">
                                <a data-parent="#accordion" href="">今日自取訂餐</a>
                            </div>
                        </div>
                        <div id="collapseTwo" className="panel-collapse collapse">
                            <div className="little_title">
                                <a data-parent="#accordion" href="">歷史訂餐紀錄</a>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="aside_menu_chk" className="aside_menu_chk">
                        <i className="fas fa-angle-right"></i>
                    </label>
                </div>

                <section id="restaurant_today_booking">
                    <div className="container">
                        <div className="search_bar">
                            <div className="search_bar_div">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="訂位編號" />
                            </div>
                            <button className="search_btn">搜尋</button>
                        </div>
                        <table className="table order_table">
                            <thead>
                                <tr>
                                    <th>已帶位</th>
                                    <th>訂位編號</th>
                                    <th>訂位日期</th>
                                    <th>訂位時間</th>
                                    <th>訂位人數</th>
                                    <th>訂位人</th>
                                    <th>手機</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {this.state.booking_detail.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" />
                                                </label>
                                            </div>
                                        </td>
                                        <td>00127</td>
                                        <td>2022/02/12</td>
                                        <td>{item.booking_time}</td>
                                        <td>{item.booking_peoplenumber}</td>
                                        <td>{item.user_name}</td>
                                        <td>{item.user_tel}</td>
                                        <td>
                                            <button className="detail_btn" data-toggle="modal" data-target="#detailModal" onClick={this.test}>
                                                詳細內容
                                            </button>
                                        </td>
                                        <td>
                                            <button className="cancel_btn" data-toggle="modal" data-target="#detailModal2">
                                                取消
                                            </button>
                                        </td>

                                        <div className="modal fade" id="detailModal2">
                                            <div className="modal-dialog modal-dialog-centered">
                                                <div className="modal-content">

                                                    <div className="modal-header">
                                                        <h3 className="modal-title">確定取消訂單嗎?</h3>
                                                        <button type="button" className="close" data-dismiss="modal"></button>
                                                    </div>

                                                    <div className="detail_modal_body">
                                                        姓名：張哲偉 <br />
                                                        手機：0972607451<br />
                                                        電子郵件：jason8745@gmail.com <br />
                                                        訂位編號：00127 <br />
                                                        訂位人數：2人 <br />
                                                        訂位日期：2022/02/24 <br />
                                                        取位時間：20:00 <br />
                                                        備註：需要兒童座椅
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="button" className="detail_btn" data-dismiss="modal">
                                                            返回
                                                        </button>
                                                        <button type="button" className="cancel_btn" data-dismiss="modal">
                                                            取消訂位
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>
                                ))} */}
                                <tr id="test">
                                    <td>
                                        <input type="checkbox" />
                                    </td>
                                    <td>00001</td>
                                    <td>2022-03-07</td>
                                    <td>12：00</td>
                                    <td>6</td>
                                    <td>李曉明</td>
                                    <td>0987654321</td>
                                    <td>
                                        <button className="detail_btn" >
                                            詳細內容
                                        </button>
                                    </td>
                                    <td>
                                        <button className="cancel_btn" >
                                            取消
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div id="restaurant_today_booking_mobile">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="table mobile_today_booking">
                                    <div className="mobile_today_booking_inline_div">
                                        <div className="mobile_today_booking_div">
                                            <div className="mobile_text_div">
                                                <p>已帶位:</p>
                                                <p>訂位編號:00001</p>
                                                <p>訂位日期:2022-03-07</p>
                                            </div>
                                            <div className="mobile_div_text">
                                                <p>訂位時間:12:00</p>
                                                <p>訂位人:李曉明</p>
                                                <p>手機:0987654321</p>
                                            </div>
                                        </div>
                                        {/* <div className="mobile_btn_div"> */}
                                        <button
                                            className="detail_btn"
                                            data-toggle="modal"
                                            data-target="#detailModal">
                                            詳細內容
                                        </button>
                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal modal-groupdetail" tabIndex="0" id="detail">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">詳細訂單</h4>
                            </div>
                            <div className="groupdetail_modal">
                                姓名： 李曉明 <br />
                                手機： 0987654321 <br />
                                電子郵件： 1234@gmail.com <br />
                                <br />
                                訂位編號： 00001 <br />
                                訂位人數： 6人 <br />
                                訂位日期： 2022/03/07 <br />
                                訂位時間： 12：00 <br />
                                需求：停車、嬰兒座椅 <br />
                                備註：無
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn_close"
                                    data-dismiss="modal"
                                >
                                    返回
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal modal-groupdetail2" tabIndex="0" id="search">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">詳細內容</h4>
                            </div>
                            <div className="groupdetail_modal">
                                訂位編號： 00001 <br />
                                訂位日期： 2022/03/07 <br />
                                訂位時間： 12：00 <br />
                                訂位人： 李曉明 <br />
                                訂位人數： 6人 <br />
                                手機： 0987654321 <br />
                                需求：停車、嬰兒座椅 <br />
                                備註：無
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn_close"
                                    data-dismiss="modal"
                                >
                                    返回
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal modal-groupdetail3" tabIndex="0" id="cancel">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">詳細內容</h4>
                            </div>
                            <div className="groupdetail_modal">
                                訂單編號： 00001 <br />
                                訂位日期： 2022/03/07 <br />
                                訂位時間： 12：00 <br />
                                訂位人： 李曉明 <br />
                                訂位人數： 6人 <br />
                                手機： 0987654321 <br />
                            </div>

                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="c_btn"
                                    data-dismiss="modal"
                                >
                                    取消
                                </button>
                                <button
                                    type="button"
                                    className="btn_close"
                                    data-dismiss="modal"
                                >
                                    返回
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blank"></div>

                <footer className="footer_page">
                    <Footer />
                </footer>
            </>
        );
    }
}

export default Restaurant_booking_today;