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
                        <div className="table-responsive-md row" style={{ 'font-size': '18px', 'text-align': 'center' }}>

                            <table className="table col-md-10" id="table_order">
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
                                    <tr style={{ 'border-top': '1px solid black' }}>
                                        <td scope="row">張哲瑋</td>
                                        <td className="foodname">西西里海鹽柴魚脆薯<br />蕃茄羅勒起司搭頂級陳年油醋</td>
                                        <td></td>
                                        <td>1<br />2</td>
                                        <td>188<br />376</td>
                                    </tr>
                                    <tr style={{ 'border-top': '1px solid black' }}>
                                        <td scope="row">楊璦寧</td>
                                        <td className="foodname">西西里海鹽柴魚脆薯</td>
                                        <td>加辣</td>
                                        <td>1</td>
                                        <td>188</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">陳宣穎</td>
                                        <td className="foodname">西西里海鹽柴魚脆薯<br />巴黎小甜心</td>
                                        <td></td>
                                        <td>1<br />1</td>
                                        <td>188<br />128</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">陳筱薇</td>
                                        <td className="foodname">西西里海鹽柴魚脆薯</td>
                                        <td></td>
                                        <td>1</td>
                                        <td>188</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">陳冠維</td>
                                        <td className="foodname">西西里海鹽柴魚脆薯</td>
                                        <td></td>
                                        <td>1</td>
                                        <td>188</td>
                                    </tr>
                                    <tr>
                                        <td scope="row">何彥儒</td>
                                        <td className="foodname">西西里海鹽柴魚脆薯</td>
                                        <td></td>
                                        <td>1</td>
                                        <td>188</td>
                                    </tr>

                                    <tr style={{ "fontSize": "18px" }}>

                                        <td scope="row" colspan="3" style={{ "textAlign": "right" }}><b>總金額</b></td>
                                        <td>
                                            NT$ 1,632
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <br /><br />

                            <div className="d-flex flex-column ordershare">
                                <p className="leader"><b>團長：<span>張哲瑋</span></b></p>
                                <br />
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
                </div>
                <footer className="footer_page">
                    <Footer />
                </footer>
            </>

        );
    }
}

export default Orderdisplay;