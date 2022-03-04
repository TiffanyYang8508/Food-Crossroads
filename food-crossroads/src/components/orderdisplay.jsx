import React, { Component } from 'react';
import Headeredit from './header copy';
import Footer from './footer';
import "../css/orderdisplay.css";


class Orderdisplay extends Component {
    state = {}

    groupfinalchar = () => {
        window.location = "/shoppingchar_group_final";
    };

    render() {
        return (
            <>
                <header classNameName="header_page">
                    <Headeredit />
                </header>
                <div id='orderdisplay'>
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#index"><span>首頁</span></a></li>
                                <li className="breadcrumb-item"><a href="#restaurantList"><span>餐廳列表</span></a></li>
                                <li className="breadcrumb-item active" aria-current="page"><span>訂餐</span></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="table-responsive-md row" style={{ 'font-size': '16px', 'text-align': 'center' }}>

                        <table className="table col-md-9" id="table_order">
                            <thead>
                                <tr>
                                    <th>名稱</th>
                                    <th className="foodname">餐點名稱</th>
                                    <th className="text-nowrap">餐點備註</th>
                                    <th>數量</th>
                                    <th>金額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">李曉明</td>
                                    <td className="foodname">西西里海鹽柴魚脆薯<br />蕃茄羅勒起司搭頂級陳年油醋</td>
                                    <td><br /></td>
                                    <td>1<br />2</td>
                                    <td>188<br />376</td>
                                </tr>
                                <tr>
                                    <td scope="row">郭美美</td>
                                    <td className="foodname">西西里海鹽柴魚脆薯<br />南義炸起司條</td>
                                    <td>加辣<br /></td>
                                    <td>1<br />1</td>
                                    <td>188<br />288</td>
                                </tr>
                                <tr>
                                    <td scope="row">陳家欣</td>
                                    <td className="foodname">田園香橙鮮蝦鮮蔬<br />水相主廚私房湯品</td>
                                    <td><br />不要加蔥</td>
                                    <td>1<br />1</td>
                                    <td>318<br />288</td>
                                </tr>

                                <tr style={{ "font-size": "18px" }}>
                                    <td scope="row" colspan="4" style={{ "text-align": "right" }}><b>總金額</b></td>
                                    <td>
                                        NT$ 1,646
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br /><br />

                        <div className="d-flex flex-column ordershare">
                            <p className="leader"><b>團長：<span>李曉明</span></b></p>
                            <div className="" id="order_share">
                                <a href="#"><img src="./img/people_plus@3x.png"
                                    style={{ "width": "25px", "height": " 20px", " margin-right": "5px" }} /></a>
                                <button type="button" className="btn_view" style={{ "font-size": "18px" }} title="copied" data-toggle="modal"
                                    data-target="#ordershare_modal">揪團連結分享</button>
                            </div>
                        </div>
                        <div className="container order_checkbtn rwd_order_checkbtn d-flex flex-row-reverse">
                            <button id="checkout" type="button" onClick={this.groupfinalchar}>去結帳</button>
                        </div>
                    </div>
                </div>
                <footer className="footer_page">
                    <Footer />
                </footer>
            </>

        );
    }
}

export default Orderdisplay;