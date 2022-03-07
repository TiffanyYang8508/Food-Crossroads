import React, { Component } from 'react';
import "../fontawesome-free-5.15.4-web/css/all.css";
import logo from "../img/logo.png";


class Headeredit extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <header id="header_page">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src={logo} alt="LOGO" /></a>
                    <div className="nav_icon">
                        <a className="nav_a" href="/restaurant/list"><i className="fas fa-store"></i>餐廳列表</a>
                        <a className="nav_a" href="/orderpage"><i className="fas fa-shopping-cart"></i>購物車</a>
                        <a className="nav_a" href="/member/login"><i className="fas fa-user-circle"></i>張哲瑋</a>
                    </div>
                    <div className="rwd_icon">
                        <a className="nav_a" href="/restaurant/list"><i className="fas fa-store"></i></a>
                        <a className="nav_a" href="/orderpage"><i className="fas fa-shopping-cart"></i></a>
                        <a className="nav_a" href="/member/login"><i className="fas fa-user-circle"></i></a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Headeredit;