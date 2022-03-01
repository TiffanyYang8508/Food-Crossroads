import React, { Component } from 'react';
import logo from "../img/logo.png";
import "../css/restaurant_self_pick_up.css";
import "../css/style.css";

class Restaurant_self_pick_up extends Component {
    state = {}

    componentDidMount() {

    }

    render() {
        return (
            <>
                <header id="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    </nav>
                </header>

                <aside id="restaurant_self_pick_up_aside">
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
                            <div id="collapseTwo" class="panel-collapse collapse default">
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

                <section id="restaurant_self_pick_up">
                    <div class="container">
                        <div class="search_bar">
                            <div>
                                <h3>今日自取訂餐</h3>
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
                                    <th>狀態</th>
                                    <th>取餐編號</th>
                                    <th>取餐日期</th>
                                    <th>取餐時間</th>
                                    <th>取餐姓名</th>
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
                                    <td>00215</td>
                                    <td>2022-02-24</td>
                                    <td>12:00</td>
                                    <td>李曉明</td>
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

                                <tr>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00215</td>
                                    <td>2022-02-24</td>
                                    <td>12:00</td>
                                    <td>郭美美</td>
                                    <td>0928755511</td>
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
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00215</td>
                                    <td>2022-02-24</td>
                                    <td>12:00</td>
                                    <td>陳家欣</td>
                                    <td>0936621354</td>
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
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00214</td>
                                    <td>2022-02-24</td>
                                    <td>20:00</td>
                                    <td>張慧庭</td>
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
                                    <td>00213</td>
                                    <td>2022-02-23</td>
                                    <td>18:30</td>
                                    <td>李玉芳</td>
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
                                    <td>00212</td>
                                    <td>2022-02-23</td>
                                    <td>17:15</td>
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

                                <tr>
                                    <td>
                                        <div class="checkbox">
                                            <label>
                                                <input type="checkbox" checked />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00211</td>
                                    <td>2022-02-23</td>
                                    <td>16:30</td>
                                    <td>劉宇慶</td>
                                    <td>0968115202</td>
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
                                                姓名：李曉明<br />
                                                手機：0972607451<br />
                                                訂位編號：00127 <br />
                                                取餐日期：2022/02/24 <br />
                                                取位時間：12:00 <br />
                                                餐點名稱：<br />
                                                西西里海鹽柴魚脆薯 *1<br />
                                                蕃茄羅勒起司搭頂級陳年油醋*2 <br />
                                                總金額：564元 <br />
                                                備註：需要餐具
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
                                                    取消訂餐
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade" id="detailModal3">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h3 class="modal-title">揪團訂單</h3>
                                                <button type="button" class="close" data-dismiss="modal"></button>
                                            </div>

                                            <div class="detail_modal_body">
                                                名稱：李曉明 <br />
                                                西西里海鹽柴魚脆薯 *1 <br />
                                                蕃茄羅勒起司搭頂級陳年油醋*2 <br />
                                                <hr />
                                                名稱：郭美美 <br />
                                                西西里海鹽柴魚脆薯 *1 (加辣)<br />
                                                南義炸起司條 *1 <br />
                                                <hr />
                                                名稱：陳家欣 <br />
                                                田園香橙鮮蝦蘿蔓鮮蔬 *1 <br />
                                                水相主廚私房湯品 *1 (不要加蔥)<br />
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

export default Restaurant_self_pick_up;