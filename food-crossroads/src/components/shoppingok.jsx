import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../css/shoppingchar.css";
import "../css/shoppingok.css";


class Shoppingok extends Component {
    state = {}
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
                                                <th colspan="2">
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
                                                    <img src="img/image_shoppingchar/imge01.jpeg" className="img-fluid img-thumbnail"
                                                        alt="" />
                                                </td>
                                                <td>
                                                    <span id="ordername" className="ordername">
                                                        餐點名
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        $123
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        1
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>
                                                        $1234
                                                    </span>
                                                </td>
                                            </tr>


                                            <tr className="shopping-row" style={{ 'height': '140px' }}>
                                                <td colspan="3" style={{ 'text-align': 'center', 'vertical-align': 'middle' }}>
                                                    <label htmlFor="get_time">取餐時間:
                                                        <input type="datetime-local" id="get_time" />
                                                    </label>
                                                </td>
                                                <td colspan="2" style={{ 'text-align': 'center', 'vertical-align': 'middle' }}>
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
                                    <button id="buy-back-btn">回上一步</button>
                                    <p>
                                        <b>總金額(3個商品)$1234</b>
                                    </p>
                                    <button id="buy-ok-btn">下訂單</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer_page">
                    <Footer />
                </footer>
            </React.Fragment>

        );
    }
}

export default Shoppingok;