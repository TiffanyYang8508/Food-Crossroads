import React, { Component } from 'react';
import $ from "jquery";
import logo from "../img/logo.png";
import Footer from "./footer";
import "../css/restaurant_self_pick_up.css"
import Collapse from "react-bootstrap/Collapse";
class Restaurant_booking_history extends Component {
    state = {
        open: true
    }

    async componentDidMount() {
        $("#ungroup").on("click", function () {
            $(".modal-groupdetail").css("display", "block");
        });

        $(".btn_close").on("click", function () {
            $(".modal-groupdetail").css("display", "none");
        });

        $("#group").on("click", function () {
            $("#group_detail").css("display", "block");
        });

        $(".btn_close").on("click", function () {
            $(".modal-groupdetail2").css("display", "none");
        });
    }

    render() {
        return (
            <React.Fragment>

                <header className="header_page">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    </nav>
                </header>


                <aside id="restaurant_self_pick_up_aside">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading" >
                                <h4 className="panel-title">
                                    <a href="/restaurant/booking/today">訂位管理</a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse" >
                                <div className="little_title">
                                    <a href="/restaurant/booking/today">今日訂位</a>
                                </div>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse default">
                                <div className="little_title">
                                    <a href="/restaurant/booking/history">歷史訂位紀錄</a>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" in={this.state.open}>
                                <h4 className="panel-title">
                                    <a href="/restaurant/self/pick">訂餐管理</a>
                                </h4>
                            </div>
                            <Collapse id="collapseOne" className="panel-collapse collapse default" in={this.state.open} >
                                <div className="little_title">
                                    <a href="/restaurant/self/pick">今日訂餐</a>
                                </div>
                            </Collapse>
                            <Collapse id="collapseOne" className="panel-collapse collapse" in={this.state.open}>
                                <div className="little_title">
                                    <a href="/restaurant/self/pick/history">歷史訂餐紀錄</a>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </aside>

                <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
                <div id="restaurant_self_pick_up_mobile_aside">
                    <div className="panel-group" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading" >
                                <h4 className="panel-title">
                                    <a href="/restaurant/booking/today">訂位管理</a>
                                </h4>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse" >
                                <div className="little_title">
                                    <a href="/restaurant/booking/today">今日訂位</a>
                                </div>
                            </div>
                            <div id="collapseOne" className="panel-collapse collapse default">
                                <div className="little_title">
                                    <a href="/restaurant/booking/history">歷史訂位紀錄</a>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading" in={this.state.open}>
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">訂餐管理</a>
                                </h4>
                            </div>
                            <Collapse id="collapseOne" className="panel-collapse collapse default" in={this.state.open} >
                                <div className="little_title">
                                    <a href="/restaurant/self/pick">今日訂餐</a>
                                </div>
                            </Collapse>
                            <Collapse id="collapseOne" className="panel-collapse collapse" in={this.state.open}>
                                <div className="little_title">
                                    <a href="/restaurant/self/pick/history">歷史訂餐紀錄</a>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                    <label htmlFor="aside_menu_chk" className="aside_menu_chk">
                        <i className="fas fa-angle-right"></i>
                    </label>
                </div>

                <section id="restaurant_self_pick_up">
                    <div className="container">
                        <div className="search_bar">
                            <div className="search_bar_div">
                                <i className="fas fa-search"></i>
                                <input type="text" placeholder="訂單編號" />
                            </div>
                            <button>搜尋</button>
                        </div>
                        <table className="table order_table">
                            <thead>
                                <tr>
                                    <th>狀態</th>
                                    <th>訂餐編號</th>
                                    <th>訂餐日期</th>
                                    <th>訂餐時間</th>
                                    <th>訂餐人</th>
                                    <th>手機</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00001</td>
                                    <td>2022-03-07</td>
                                    <td>18:00</td>
                                    <td>李曉明</td>
                                    <td>0987654321</td>
                                    <td>
                                        <button className="detail_btn" id='ungroup'>
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" />
                                            </label>
                                        </div>
                                    </td>
                                    <td>00002</td>
                                    <td>2022-03-07</td>
                                    <td>18:00</td>
                                    <td>李曉明</td>
                                    <td>0987654321</td>
                                    <td>
                                        <button className="detail_btn" id='group'>
                                            詳細內容
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <div id="restaurant_self_pick_up_mobile">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="table mobile_pick_up">
                                    <div className="mobile_pick_up_inline_div">
                                        <div className="mobile_pick_up_div">
                                            <div className="mobile_text_div">
                                                <p>狀態:</p>
                                                <p>訂餐編號:00001</p>
                                                <p>訂餐日期:2022-03-07</p>
                                            </div>
                                            <div className="mobile_div_text">
                                                <p>訂餐時間:18:00</p>
                                                <p>訂餐人:李曉明</p>
                                                <p>手機:0987654321</p>
                                            </div>
                                        </div>
                                        {/* <div className="mobile_btn_div"> */}
                                        <button
                                            className="detail_btn2"
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

                <div class="modal modal-groupdetail" tabIndex="0" id="detail">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">詳細訂單</h4>
                            </div>
                            <div class="groupdetail_modal">
                                姓名： 李曉明 <br />
                                手機： 0987654321 <br />
                                訂餐編號：00001 <br />
                                餐點： <br />
                                西西里海鹽柴魚脆薯 *1 <br />
                                蕃茄羅勒起司搭頂級陳年油醋*2 <br />
                                總金額：564元 <br />
                                訂餐時間：3/7（一） 下午6：00 <br />
                                備註：需要餐具

                            </div>

                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn_close"
                                    data-dismiss="modal"
                                >
                                    返回
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal modal-groupdetail2" tabIndex="0" id="group_detail">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">詳細訂單</h4>
                            </div>
                            <div class="groupdetail_modal">
                                訂單編號： 00002 <br />
                                名稱：李曉明 <br />
                                西西里海鹽柴魚脆薯 *1   188 <br />
                                蕃茄羅勒起司搭頂級陳年油醋*2   188 <br />
                                <br />
                                名稱：郭美美 <br />
                                西西里海鹽柴魚脆薯*1  加辣  188 <br />
                                南義炸起司條*1  288 <br />
                                <br />
                                名稱：陳家欣 <br />
                                田園香橙鮮蝦蘿蔓鮮蔬*1  318 <br />
                                水相主廚私房湯品*1  不要加蔥  288 <br />
                            </div>

                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn_close"
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
            </React.Fragment>
        );
    }
}

export default Restaurant_booking_history;