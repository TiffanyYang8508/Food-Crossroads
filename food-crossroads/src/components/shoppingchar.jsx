import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import "../css/shoppingchar.css";
import Axios from "axios";


class Shoppingchar extends Component {
    state = {
        shoppingcharItem: { food_name: "", food_amount: "" }
    }

    // loginClick = async () => {
    //     console.log("OK");
    //     await new Axios.get("http://localhost:8000/shoppingchar/:id", this.state.member)
    //         .then((res) => {
    //             if (res.data.status !== "1") {
    //                 $("#reportMessage").text(res.data.message);
    //             }
    //         })
    //         .catch((error) => { console.error(error) });

    // }


    render() {
        return (
            <React.Fragment>
                <Header />
                <div id='shoppingchar'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html"><span>首頁</span></a></li>
                                        <li className="breadcrumb-item"><a href=""><span>餐廳列表</span></a></li>
                                        <li className="breadcrumb-item active" aria-current="page"><span>訂餐</span></li>
                                    </ul>
                                </nav>


                                <div id="shoppingchar">
                                    <table className="table shopping-table">
                                        <thead>
                                            <tr>
                                                <th colspan="3">商品</th>
                                                <th>單價</th>
                                                <th>數量</th>
                                                <th>總計</th>
                                                <th>刪除</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr className="tr_title">
                                                <td colspan="7">
                                                    <h5>餐廳名稱</h5>
                                                </td>
                                            </tr>

                                            <tr className="shopping-row" id="shopping-row">
                                                <td>
                                                    <input className="shopping-checkbox checkmark" id="shopping-checkbox" type="checkbox"
                                                        name="shopping-checkbox" />
                                                </td>
                                                <td className="wrapper">
                                                    <img src="img/image_shoppingchar/imge01.jpeg" className="img-fluid img-thumbnail"
                                                        alt="" />
                                                </td>
                                                <td>
                                                    <span id="ordername" className="ordername">{this.state.shoppingcharItem.food_name}</span>
                                                </td>
                                                <td>
                                                    <span>$123</span>
                                                </td>
                                                <td>

                                                    <span className="qty-squre">
                                                        <input id="qtyminus" type="button" value="-" className="qty-btn" />
                                                        <input type="text" value="1" className="qty" name="quantity" />
                                                        <input id="qtyplus" type="button" value="+" className="qty-btn" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span>$1234</span>
                                                </td>
                                                <td className="delete-shopping">
                                                    <span>刪除</span>
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
                                                    <input className="shopping-checkbox checkmark" id="shopping-checkbox" type="checkbox"
                                                        name="shopping-checkbox" />
                                                    <div className="mobile_shopping_img">
                                                        <img src="img/image_shoppingchar/imge01.jpeg" className="img-fluid img-thumbnail"
                                                            alt="" />
                                                    </div>
                                                    <div className="mobile_shopping_text">
                                                        <span className="mobile_span">餐點名</span>
                                                        <span className="mobile_span">$123</span>
                                                        <span className="qty-squre">
                                                            <input id="qtyminus" type="button" value="-" className="qty-btn" />
                                                            <input type="text" value="1" className="qty" name="quantity" />
                                                            <input id="qtyplus" type="button" value="+" className="qty-btn" />
                                                        </span>
                                                        <span className="mobile_span">總額:$1234</span>
                                                    </div>
                                                    <div className="mobile_delete">
                                                        <button>刪除</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="all-squre" id="all-squre">
                                    <label className="media">
                                        <input id="shopping-checkbox" className="shopping-checkbox checkmark" name="shopping-allcheckbox"
                                            type="checkbox" />
                                        <span className="media-body">全選</span>
                                    </label>
                                    <p>
                                        <b>總金額(3個商品)$1234</b>
                                    </p>
                                    <button className="buy-btn">
                                        <b>結帳</b>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment >
        );

    }
}

export default Shoppingchar;