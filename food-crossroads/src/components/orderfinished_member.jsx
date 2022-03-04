import React, { Component } from 'react';
import Headeredit from "./header copy";
import Footer from "./footer";
import "../css/orderfinish.css"

class Orderfinished_member extends Component {
    state = {}

    check_order = () => {
        window.location = "/orderdisplay";
    }

    back_restaurant = () => {
        window.location = "/restaurant/page";
    }

    render() {
        return (
            <>
                <header className="header_page">
                    <Headeredit />
                </header>

                <div id="orderfinished" className="container">
                    <div className="order_finish_div">
                        <div className="order_finish">
                            <p><i className="fas fa-check"></i> 完成訂單</p>
                        </div>
                    </div>
                    <div className="buy_back_div">
                        <button className="buy_back_btn" id="check_order" onClick={this.check_order}>查看所有團員已點清單</button>
                        <button className="buy_back_btn" id="back_to_home" onClick={this.back_restaurant}>回到餐廳</button>
                    </div>
                </div>

                <footer className="footer_page">
                    <Footer />
                </footer>
            </>
        );
    }
}

export default Orderfinished_member;