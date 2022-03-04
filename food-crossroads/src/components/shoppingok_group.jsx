import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import "../css/shoppingchar.css";
import "../css/shoppingok.css";
import Order_picture from "../img/aqua/aqua_img.jpg";


class hoppingok_group extends Component {
    state = {}
    buyback = () => {
        window.location = "/shoppingchar";
    }
    buyok = () => {
        window.location = "/orderfinished_member";
    }
    render() {
        return (
            <React.Fragment>
                <header className="header_page">
                    <Header />
                </header>
                <div id='shoppingchar'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html"><span>首頁</span></a></li>
                                        <li className="breadcrumb-item"><a href="list.html"><span>餐廳列表</span></a></li>
                                        <li className="breadcrumb-item active" aria-current="page"><span>訂餐</span></li>
                                    </ul>
                                </nav>

                                <div id="shopping">
                                    <table className="table shopping-table">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">
                                                    商品
                                                </th>
                                                <th>
                                                    單價
                                                </th>
                                                <th>
                                                    數量
                                                </th>
                                                <th>
                                                    總計
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="shopping-row" id="shopping-row">
                                                <td className="wrapper" id="td-1" style={{ 'width': '200px' }}>
                                                    <img src={Order_picture} className="img-fluid img-thumbnail" alt="" />
                                                </td>
                                                <td>
                                                    <span id="ordername" className="ordername">
                                                        西西里海鹽柴魚脆薯
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        $188
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        1
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        $188
                                                    </span>
                                                </td>
                                            </tr>




                                            <tr className="shopping-row" style={{ 'height': '140px' }}>
                                                <td colSpan="3" style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}>
                                                    <label htmlFor="get_time">取餐時間:
                                                        <input type="datetime-local" id="get_time" />
                                                    </label>
                                                </td>
                                                <td colSpan="2" style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}>
                                                    <label htmlFor="order-text">備註:
                                                        <input type="text" id="order-text" />
                                                    </label>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div id="mobile_shopping">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mobile_shopping_div">
                                                    <div className="mobile_shopping_inline_div">
                                                        <div className="mobile_shopping_img">
                                                            <img src="img/image_shoppingchar/imge01.jpeg"
                                                                className="img-fluid img-thumbnail" alt="" />
                                                        </div>
                                                        <div className="mobile_shopping_text">
                                                            <span className="mobile_span">餐點名</span>
                                                            <div className="mobile_div">
                                                                <span>$123</span>
                                                                <span>x1</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mobile_div">
                                                        <span>總額:</span>
                                                        <span>$1234</span>
                                                    </div>
                                                </div>
                                                <div className="mobile_shopping_div">
                                                    <div className="mobile_shopping_inline_div">
                                                        <div className="mobile_shopping_img">
                                                            <img src="img/image_shoppingchar/imge02.jpeg"
                                                                className="img-fluid img-thumbnail" alt="" />
                                                        </div>
                                                        <div className="mobile_shopping_text">
                                                            <span className="mobile_span">餐點名</span>
                                                            <div className="mobile_div">
                                                                <span>$123</span>
                                                                <span>x1</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mobile_div">
                                                        <span>總額:</span>
                                                        <span>$1234</span>
                                                    </div>
                                                </div>
                                                <div className="mobile_shopping_div">
                                                    <div className="mobile_shopping_inline_div">
                                                        <div className="mobile_shopping_img">
                                                            <img src="img/image_shoppingchar/imge03.jpeg"
                                                                className="img-fluid img-thumbnail" alt="" />
                                                        </div>
                                                        <div className="mobile_shopping_text">
                                                            <span className="mobile_span">餐點名</span>
                                                            <div className="mobile_div">
                                                                <span>$123</span>
                                                                <span>x1</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mobile_div">
                                                        <span>總額(3個商品):</span>
                                                        <span>$1234</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="all-squre" id="all-squre">
                                    <button id="buy-back-btn" onClick={this.buyback} >回上一步</button>
                                    <p>
                                        <b>總額(3個商品):$564</b>
                                    </p>
                                    <button id="buy-ok-btn" onClick={this.buyok}>下訂單</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <footer className="footer_page">
                    <Footer />
                </footer>
            </React.Fragment >

        );
    }
}

export default hoppingok_group;