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

    showDetail = () => {
        alert("OK");
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
                            <Collapse className="panel-heading" in={this.state.open}>
                                <h4 className="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">訂餐管理</a>
                                </h4>
                            </Collapse>
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

                <section id="restaurant_self_pick_up">
                    <div className="container">
                        <div className="search_bar">
                            <div>
                                <h3>今日訂餐</h3>
                            </div>
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
                                    <th>訂餐編號</th>
                                    <th>訂餐日期</th>
                                    <th>訂餐時間</th>
                                    <th>訂餐人</th>
                                    <th>手機</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr id="test">
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
                                        <button className="detail_btn" onClick={this.showDetail}>
                                            詳細內容
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
            </React.Fragment>
        );
    }
}

export default Restaurant_booking_history;