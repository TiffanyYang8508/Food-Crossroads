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
        var url = `http://localhost:8000/restaurant/booking/today`;
        var result = await Axios.get(url);
        var newState = { ...this.state };
        newState.booking_detail = result.data;
        this.setState(newState);

        $(".detail_btn").on("click", function () {
            $(".modal-detail").css("display", "block");
        });
    }

    render() {
        return (
            <>
                <header id="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    </nav>
                </header>

                <aside id="restaurant_today_booking_aside">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">訂位管理</a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse default">
                                <div className="little_title">
                                    <a data-parent="#accordion" href="">今日訂位</a>
                                </div>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse">
                                <div className="little_title">
                                    <a data-parent="#accordion" href="">歷史訂位紀錄</a>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">訂餐管理</a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                                <div className="little_title">
                                    <a data-parent="#accordion" href="restaurant_self_pick_up.html">今日自取訂餐</a>
                                </div>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                                <div className="little_title">
                                    <a data-parent="#accordion" href="restaurant_history_list.html">歷史訂餐紀錄</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </aside>

                <section id="restaurant_today_booking">
                    <div className="container">
                        <div className="search_bar">
                            <div>
                                <h3>今日訂位</h3>
                            </div>
                            <div className="search_bar_div">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="訂單編號" />
                            </div>
                            <button >搜尋</button>
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
                                {this.state.booking_detail.map((item, index) => (
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
                                ))}
                                <tr>
                                    <td>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00127</td>
                                    <td>2022/01/18</td>
                                    <td>16:30</td>
                                    <td>5</td>
                                    <td>陳冠維</td>
                                    <td>0979201120</td>
                                    <td>
                                        <button className="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                    <td>
                                        <button className="cancel_btn" data-toggle="modal" data-target="#detailModal2">
                                            取消
                                        </button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>

                <footer className="footer_page">
                    <Footer />
                </footer>
            </>
        );
    }
}

export default Restaurant_booking_today;