import React, { Component } from 'react';
import "../fontawesome-free-5.15.4-web/css/all.css";
import "../css/style.css";
import "../css/restaurant_booking_history.css"

class Restaurant_booking_history extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>

                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="index.html"><img src={require('../img/logo.png')} alt="LOGO" /></a>
                        <div className="nav_icon">
                            <a className="nav_a" href="list.html"><i className="fas fa-store"></i>餐廳列表</a>
                            <a className="nav_a" href="shoppingchar.html"><i className="fas fa-shopping-cart"></i>購物車</a>
                            <a className="nav_a" href="member_login.html"><i className="fas fa-user-circle"></i>會員登入</a>
                        </div>
                        <div className="rwd_icon">
                            <a className="nav_a" href="list.html"><i className="fas fa-store"></i></a>
                            <a className="nav_a" href="shoppingchar.html"><i className="fas fa-shopping-cart"></i></a>
                            <a className="nav_a" href="member_login.html"><i className="fas fa-user-circle"></i></a>
                        </div>
                    </nav>
                </header>

                <footer>
                    <div className="footer_link">
                        <a href="#">關於我們</a>
                        <a href="#">商家入口</a>
                        <a href="#">常見問題</a>
                        <a href="#">聯絡我們</a>
                    </div>
                    <div className="footer_text">
                        <p>Copyright &copy; 2022 FoodCrossesRoads.All Rights Reserved.</p>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default Restaurant_booking_history;