import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";
import "../css/orderfinish.css"

class Group_orderfinished extends Component {
    state = {}

    check_order = () => {
        window.location = "/ordermanagement/1";
    }

    back_restaurant = () => {
        window.location = "/restaurant/page";
    }

    render() {
        return (
            <>
                <header className="header_page">
                    <Header />
                </header>

                <div class="container">
                    <div class="order_finish_div">
                        <div class="order_finish">
                            <p style={{fontSize: "28px"}}><i class="fas fa-check"></i> 完成訂單</p>
                        </div>
                    </div>
                    <div class="buy_back_div">
                        <button class="buy_back_btn" id="check_order" onClick={this.check_order}>查看所有團員已點清單</button>
                        <button class="buy_back_btn" id="back_to_home" onClick={this.back_restaurant}>回到餐廳</button>
                    </div>
                </div>

                <footer className="footer_page">
                    <Footer />
                </footer>
            </>
        );
    }
}

export default Group_orderfinished;