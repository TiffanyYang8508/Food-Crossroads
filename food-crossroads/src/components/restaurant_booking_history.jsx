import React, { Component } from 'react';
import logo from "../img/logo.png";
import Footer from "./footer";
import "../css/restaurant_booking_history.css"
import Collapse from "react-bootstrap/Collapse";
class Restaurant_booking_history extends Component {
    state = {
        open: true
    }
    render() {
        return (
            <React.Fragment>

                <header className="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    </nav>
                </header>


                <aside id="restaurant_booking_history_aside">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading" in={this.state.open}>
                                <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">訂位管理</a>
                                </h4>
                            </div>
                            <Collapse id="collapseOne" className="panel-collapse collapse" in={this.state.open} >
                                <div className="little_title">
                                    <a href="/restaurant/booking/today">今日訂位</a>
                                </div>
                            </Collapse>
                            <Collapse id="collapseOne" className="panel-collapse collapse default" in={this.state.open}>
                                <div className="little_title">
                                    <a href="/restaurant/booking/history">歷史訂位紀錄</a>
                                </div>
                            </Collapse>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><a href="/restaurant/self/pick">訂餐管理</a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                                <div className="little_title">
                                    <a href="">今日自取訂餐</a>
                                </div>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                                <div className="little_title">
                                    <a href="">歷史訂餐紀錄</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
                <div id="restaurant_booking_history_mobile_aside">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading" in={this.state.open}>
                                <h4 className="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">訂位管理</a>
                                </h4>
                            </div>
                            <Collapse id="collapseOne" className="panel-collapse collapse" in={this.state.open} >
                                <div className="little_title">
                                    <a href="/restaurant/booking/today">今日訂位</a>
                                </div>
                            </Collapse>
                            <Collapse id="collapseOne" className="panel-collapse collapse default" in={this.state.open}>
                                <div className="little_title">
                                    <a href="/restaurant/booking/history">歷史訂位紀錄</a>
                                </div>
                            </Collapse>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h4 className="panel-title"><a href="/restaurant/self/pick">訂餐管理</a>
                                </h4>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                                <div className="little_title">
                                    <a href="">今日自取訂餐</a>
                                </div>
                            </div>
                            <div id="collapseTwo" className="panel-collapse collapse">
                                <div className="little_title">
                                    <a href="">歷史訂餐紀錄</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <label htmlFor="aside_menu_chk" className="aside_menu_chk">
                        <i className="fas fa-angle-right"></i>
                    </label>
                </div>

                <section id="restaurant_booking_history">
                    <div className="container">
                        <div className="search_bar">
                            <div className="search_bar_div">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="訂單編號" />
                            </div>
                            <button onclick="search()">搜尋</button>
                        </div>
                        <table className="table order_table">
                            <thead>
                                <tr>
                                    <th>狀態</th>
                                    <th>訂位編號</th>
                                    <th>訂位日期</th>
                                    <th>訂位時間</th>
                                    <th>訂位人數</th>
                                    <th>訂位人</th>
                                    <th>手機</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" checked disabled="disabled" />
                                    </td>
                                    <td>99999</td>
                                    <td>2022-02-22</td>
                                    <td>19:30</td>
                                    <td>5</td>
                                    <td>江程哲</td>
                                    <td>0988512203</td>
                                    <td>
                                        <button className="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" checked disabled="disabled" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>99998</td>
                                    <td>2022-02-22</td>
                                    <td>17:00</td>
                                    <td>1</td>
                                    <td>張瑜庭</td>
                                    <td>0902135699</td>
                                    <td>
                                        <button className="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" checked disabled="disabled" />
                                    </td>
                                    <td>99997</td>
                                    <td>2022-02-21</td>
                                    <td>18:30</td>
                                    <td>3</td>
                                    <td>李曉明</td>
                                    <td>0918557110</td>
                                    <td>
                                        <button className="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <input type="checkbox" checked disabled="disabled" />
                                    </td>
                                    <td>99996</td>
                                    <td>2022-02-21</td>
                                    <td>17:15</td>
                                    <td>3</td>
                                    <td>陳誠慶</td>
                                    <td>0972110202</td>
                                    <td>
                                        <button className="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>

                                <div className="modal fade" id="detailModal">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h3 className="modal-title">訂單明細</h3>
                                                <button type="button" className="close" data-dismiss="modal"></button>
                                            </div>

                                            <div className="detail_modal_body">
                                                姓名：江程哲 <br />
                                                手機：0988512203<br />
                                                電子郵件：mark8841@gmail.com <br />
                                                訂位編號：00123 <br />
                                                訂位人數：5人 <br />
                                                訂位日期：2022/02/22 <br />
                                                取位時間：19:30 <br />
                                                備註：需要兒童座椅
                                            </div>

                                            <div className="modal-footer">
                                                <button type="button" className="detail_btn" data-dismiss="modal">
                                                    返回
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </tbody>
                        </table>
                    </div>
                </section>

                <div id="restaurant_booking_history_mobile">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="table mobile_booking_history">
                                    <div class="mobile_booking_history_inline_div">
                                        <div class="mobile_booking_history_div">
                                            <div class="mobile_text_div">
                                                <p>狀態:</p>
                                                <p>訂位編號:99999</p>
                                                <p>訂位日期:2022-02-22</p>
                                                <p>訂位時間:19:30</p>
                                            </div>
                                            <div class="mobile_div_text">
                                                <p>訂位人數:5</p>
                                                <p>訂位人:江程哲</p>
                                                <p>手機:0988512203</p>
                                            </div>
                                        </div>
                                        {/* <div class="mobile_btn_div"> */}
                                        <button
                                            class="detail_btn"
                                            data-toggle="modal"
                                            data-target="#detailModal">
                                            詳細內容
                                        </button>
                                        {/* </div> */}
                                    </div>
                                    <div class="mobile_booking_history_inline_div">
                                        <div class="mobile_booking_history_div">
                                            <div class="mobile_text_div">
                                                <p>狀態:</p>
                                                <p>訂位編號:99999</p>
                                                <p>訂位日期:2022-02-22</p>
                                                <p>訂位時間:17:00</p>
                                            </div>
                                            <div class="mobile_div_text">
                                                <p>訂位人數:1</p>
                                                <p>訂位人:張瑜庭</p>
                                                <p>手機:0902135699</p>
                                            </div>
                                        </div>
                                        {/* <div class="mobile_btn_div"> */}
                                        <button
                                            class="detail_btn"
                                            data-toggle="modal"
                                            data-target="#detailModal">
                                            詳細內容
                                        </button>
                                        {/* </div> */}
                                    </div>
                                    <div class="mobile_booking_history_inline_div">
                                        <div class="mobile_booking_history_div">
                                            <div class="mobile_text_div">
                                                <p>狀態:</p>
                                                <p>訂位編號:99997</p>
                                                <p>訂位日期:2022-02-21</p>
                                                <p>訂位時間:18:30</p>
                                            </div>
                                            <div class="mobile_div_text">
                                                <p>訂位人數:3</p>
                                                <p>訂位人:李曉明</p>
                                                <p>手機:0918557110</p>
                                            </div>
                                        </div>
                                        {/* <div class="mobile_btn_div"> */}
                                        <button
                                            class="detail_btn"
                                            data-toggle="modal"
                                            data-target="#detailModal">
                                            詳細內容
                                        </button>
                                        {/* </div> */}
                                    </div>
                                    <div class="mobile_booking_history_inline_div">
                                        <div class="mobile_booking_history_div">
                                            <div class="mobile_text_div">
                                                <p>狀態:</p>
                                                <p>訂位編號:99999</p>
                                                <p>訂位日期:2022-02-21</p>
                                                <p>訂位時間:17:15</p>
                                            </div>
                                            <div class="mobile_div_text">
                                                <p>訂位人數:3</p>
                                                <p>訂位人:陳誠慶</p>
                                                <p>手機:0972110202</p>
                                            </div>
                                        </div>
                                        {/* <div class="mobile_btn_div"> */}
                                        <button
                                            class="detail_btn"
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

                <div className="blank"></div>

                <footer className="footer_page">
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}

export default Restaurant_booking_history;