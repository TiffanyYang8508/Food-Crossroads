import React, { Component } from 'react';
import logo from "../img/logo.png";
import "../css/restaurant_booking_today.css"
import "../fontawesome-free-5.15.4-web/css/all.css";
import "../css/style.css";

class Restaurant_booking_today extends Component {
    state = {}
    render() {
        return (
            <>
                <header id="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    </nav>
                </header>

                <aside id="restaurant_today_booking_aside">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">訂位管理</a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse default">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_today_booking.html">今日訂位</a>
                                </div>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_booking_history.html">歷史訂位紀錄</a>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">訂餐管理</a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_self_pick_up.html">今日自取訂餐</a>
                                </div>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_history_list.html">歷史訂餐紀錄</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <section id="restaurant_today_booking">
                    <div class="container">
                        <div class="search_bar">
                            <div>
                                <h3>今日訂位</h3>
                            </div>
                            <div class="search_bar_div">
                                <i class="fas fa-search"></i>
                                <input type="text" placeholder="訂單編號" />
                            </div>
                            <button onclick="search()">搜尋</button>
                        </div>
                        <table class="table order_table">
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
                                <tr id="test">
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00127</td>
                                    <td>2022-02-24</td>
                                    <td>20:00</td>
                                    <td>2</td>
                                    <td>張哲偉</td>
                                    <td>0972607451</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                    <td>
                                        <button class="cancel_btn" data-toggle="modal" data-target="#detailModal2">
                                            取消
                                        </button>
                                    </td>
                                </tr>

                                <tr id="search">
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00126</td>
                                    <td>2022-02-24</td>
                                    <td>17:00</td>
                                    <td>4</td>
                                    <td>張瑜庭</td>
                                    <td>0902135699</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                    <td>
                                        <button class="cancel_btn" data-toggle="modal" data-target="#detailModal2">
                                            取消
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" checked />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00125</td>
                                    <td>2022-02-23</td>
                                    <td>18:30</td>
                                    <td>3</td>
                                    <td>李曉明</td>
                                    <td>0918557110</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                    <td>
                                        <button class="cancel_btn" data-toggle="modal" data-target="#detailModal2">
                                            取消
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" checked />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00124</td>
                                    <td>2022-02-23</td>
                                    <td>17:15</td>
                                    <td>3</td>
                                    <td>陳誠慶</td>
                                    <td>0972110202</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                    <td>
                                        <button class="cancel_btn" data-toggle="modal" data-target="#detailModal2">
                                            取消
                                        </button>
                                    </td>
                                </tr>

                                <div class="modal fade" id="detailModal">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                    
                                            <div class="modal-header">
                                                <h3 class="modal-title">訂單明細</h3>
                                                <button type="button" class="close" data-dismiss="modal"></button>
                                            </div>

                                            <div class="detail_modal_body">
                                                姓名：張哲偉 <br />
                                                手機：0972607451<br />
                                                電子郵件：jason8745@gmail.com <br />
                                                訂位編號：00127 <br />
                                                訂位人數：2人 <br />
                                                訂位日期：2022/02/24 <br />
                                                取位時間：20:00 <br />
                                                備註：需要兒童座椅
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="detail_btn" data-dismiss="modal">
                                                    返回
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade" id="detailModal2">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                       
                                            <div class="modal-header">
                                                <h3 class="modal-title">確定取消訂單嗎?</h3>
                                                <button type="button" class="close" data-dismiss="modal"></button>
                                            </div>

                                            <div class="detail_modal_body">
                                                姓名：張哲偉 <br />
                                                手機：0972607451<br />
                                                電子郵件：jason8745@gmail.com <br />
                                                訂位編號：00127 <br />
                                                訂位人數：2人 <br />
                                                訂位日期：2022/02/24 <br />
                                                取位時間：20:00 <br />
                                                備註：需要兒童座椅
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="detail_btn" data-dismiss="modal">
                                                    返回
                                                </button>
                                                <button type="button" class="cancel_btn" data-dismiss="modal" onclick="myFunction()">
                                                    取消訂位
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </tbody>
                        </table>
                    </div>
                </section>

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
            </>
        );
    }
}

export default Restaurant_booking_today;