import React, { Component } from 'react';
import "../css/restaurant_self_pick_up_history.css";
import logo from "../img/logo.png";
import "../css/style.css";

class Restaurant_self_pick_up_history extends Component {
    state = {}
    render() {
        return (
            <>
                <header id="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    </nav>
                </header>

                <aside id="restaurant_history_list_aside">
                    <div class="panel-group" id="accordion">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4 class="panel-title"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">訂位管理</a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse">
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
                            <div id="collapseTwo" class="panel-collapse collapse default">
                                <div class="little_title">
                                    <a data-parent="#accordion" href="restaurant_history_list.html">歷史訂餐紀錄</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <section id="restaurant_history_list">
                    <div class="container">
                        <div class="search_bar">
                            <div>
                                <h3>歷史訂餐紀錄</h3>
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
                                    <th>取餐編號</th>
                                    <th>取餐日期</th>
                                    <th>取餐時間</th>
                                    <th>訂餐姓名</th>
                                    <th>訂餐金額</th>
                                    <th>手機</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>00123</td>
                                    <td>2022-02-22</td>
                                    <td>19:30</td>
                                    <td>陳映瑜</td>
                                    <td>350</td>
                                    <td>0988512203</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>00122</td>
                                    <td>2022-02-22</td>
                                    <td>17:00</td>
                                    <td>王力宏</td>
                                    <td>490</td>
                                    <td>0902135699</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>00121</td>
                                    <td>2022-02-21</td>
                                    <td>18:30</td>
                                    <td>劉雨晴</td>
                                    <td>980</td>
                                    <td>0918557110</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>00120</td>
                                    <td>2022-02-21</td>
                                    <td>17:15</td>
                                    <td>張宇</td>
                                    <td>500</td>
                                    <td>0972110202</td>
                                    <td>
                                        <button class="detail_btn" data-toggle="modal" data-target="#detailModal">
                                            詳細內容
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
                                                姓名：陳映瑜 <br />
                                                手機：0972607451<br />
                                                電子郵件：jason8745@gmail.com <br />
                                                取餐編號：00123 <br />
                                                取餐日期：2022/02/22 <br />
                                                取位時間：19:30 <br />
                                                備註：需要兒童座椅
                                            </div>

                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-lg btn-secondary" data-dismiss="modal">
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

export default Restaurant_self_pick_up_history;