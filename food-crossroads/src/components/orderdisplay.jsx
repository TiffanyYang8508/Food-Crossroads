import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../css/orderdisplay.css";


class Orderdisplay extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <header className="header_page">
                    <Header />
                </header>
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#index"><span>首頁</span></a></li>
                            <li className="breadcrumb-item"><a href="#restaurantList"><span>餐廳列表</span></a></li>
                            <li className="breadcrumb-item active" aria-current="page"><span>訂餐</span></li>
                        </ul>
                        <a href="#"><img src="./img/people_plus@3x.png" className="rwd_icon_plus" /></a>
                    </nav>

                    <div className="table-responsive-md row" style={{ 'fontSize': '16px', 'textAlign': 'center' }}>
                        <table className="table col-md-9" id="table_order">
                            <thead>
                                <tr>
                                    <th>名稱</th>
                                    <th>餐點名稱</th>
                                    <th className="text-nowrap">餐點備註</th>
                                    <th>數量</th>
                                    <th>金額</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="row">團長</td>
                                    <td>餐點名稱<br />餐點名稱</td>
                                    <td>小辣<br />不要蔥、不要蒜</td>
                                    <td>1<br />1</td>
                                    <td>50<br />50</td>
                                </tr>
                                <tr>
                                    <td scope="row">團員</td>
                                    <td>餐點名稱</td>
                                    <td>小辣</td>
                                    <td>1</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td scope="row">團員</td>
                                    <td>餐點名稱</td>
                                    <td>小辣</td>
                                    <td>1</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td scope="row">團員</td>
                                    <td>餐點名稱</td>
                                    <td>小辣</td>
                                    <td>1</td>
                                    <td>50</td>
                                </tr>

                                <tr style={{ 'fontSize': '18px' }}>
                                    <td scope="row" colSpan="4" style={{ 'textAlign': 'right' }}><b>總金額</b></td>
                                    <td>
                                        NT$ 250
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <br /><br />

                        <div className="share_member col-md-3 rwd_share_member" id="ordermember_Sidebar">

                            <table className="table share_member_table rwd_share_member_table"
                                style={{ 'fontSize': '18px', 'width': '50px', 'lineHeight': '1em', 'border': '1px solid #403c3c', 'borderRadius': '10%' }}>
                                <tbody>
                                    <tr className="close_btn">
                                        <td style={{ 'color': '#585555c5' }}>
                                            <i className="fas fa-times-circle fa-lg d-flex float-right"></i>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="" id="order_share">
                                                <a href="#"><img src="../img/people_plus@3x.png"
                                                    style={{ 'width': '25px', 'height': '20px', 'marginRight': '5px' }} /></a>
                                                <button type="button" className="btn_view" style={{ 'fontSize': '18px' }}
                                                    title="copied">揪團分享連結</button>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td><b>團長:</b></td>
                                    </tr>

                                    <tr>
                                        <td>總金額：＊＊＊
                                            <br /><br />
                                            <button type="button" className="btn_view">檢視已點清單</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="container order_checkbtn rwd_order_checkbtn d-flex flex-row-reverse">
                            <button id="checkout" type="button" className="btn btn-danger btn-lg ">去結帳</button>
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

export default Orderdisplay;