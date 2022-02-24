import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import $ from "jquery";
import "../css/restaurant_page.css";

class Restaurant_page extends Component {
    state = {  }


    componentDidMount() {

        // 置頂按鈕:點選後回到頂端
       
        $(".ontop_btn").on("click", function() {
            $("html,body").animate({ scrollTop: 0 }, 300);
        })

        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 300) {
                $(".ontop_btn").fadeIn(100);
            } else {
                $(".ontop_btn").stop().fadeOut(100);
            }
        });

        $(".reservation_btn").on("click", function() {
            document.getElementById('to_register_member').style.display='block';
        })

        $(".order_btn").on("click", function() {
            document.getElementById('to_register_member').style.display='block';
        })

        $(".display_top_right").on("click", function() {
            document.getElementById('to_register_member').style.display='none';
        })

        // $(".to_member_register").on("click", function() {
        //     location.href = "./components/member_register.jsx";
        // })

        // $(".to_member_login").on("click", function() {
        //     location.href = "./components/member_login.jsx";
        // })

        // $(".cuisine_name").on("click", function() {
        //     location.href = "";
        // })

        $(".shop_menu").on("click", function() {
            document.getElementById('menu').style.display='block';
        })

        $(".display_top_right, .menu").on("click", function() {
            document.getElementById('menu').style.display='none';
        })

        // document.onclick = open;

        // function open(){
        //     e = window.event
        //     var target = e.target.id
        //     if (target == "menu_btn" || target == "menu_content") {
        //         menu_btnClick();
        //     } else {
        //         menu_none();
        //     }
        // }
    }

    render() { 
        return (
            <React.Fragment>

                <div className="header_page">
                    <Header />
                </div>

                <section id="restaurant_page">
                    <div className="container">
                        <div className="row">
                            <div className="btn_container">
                                <button id="reservation" className="reservation_btn" data-bs-toggle="modal" onClick={this.reservation_btnClick}>我要訂位</button>
                                <button id="order" className="order_btn" onClick={this.order_btnClick}>我要訂餐</button>
                            </div>
                            <div id="to_register_member" className="modal">
                                <div className="modal_content">
                                    <div className="container_alert">
                                        <div onClick={this.to_register_member} className="button display_top_right">&times;</div>
                                        <br />
                                        <br />
                                        <h2>您目前狀態為 非會員！</h2>
                                        <p>請前往會員中心登入／註冊，謝謝！</p>
                                        <br />
                                        <button className="to_member_login" onClick={this.member_login}>登入</button>
                                        <button className="to_member_register" onClick={this.member_register}>註冊</button>
                                    </div>
                                </div>
                            </div>

                            <nav aria-label="breadcrumb">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">首頁</a></li>
                                    <li className="breadcrumb-item"><a href="list.html">餐廳列表</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">aqua 水相餐廳</li>
                                </ul>
                            </nav>

                            <div id="carousel" className="carousel slide" data-ride="carousel">

                                <ol className="carousel-indicators">
                                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#carousel" data-slide-to="1"></li>
                                    <li data-target="#carousel" data-slide-to="2"></li>
                                </ol>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={require("../img/aqua/aqua_1.jpg")} className="d-block w-60" alt="aqua_1" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../img/aqua/aqua_2.jpg")} className="d-block w-60" alt="aqua_2" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={require("../img/aqua/aqua_3.jpg")} className="d-block w-60" alt="aqua_3" />
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>

                            </div>

                        </div>

                        <div className="shop_container">

                            <div className="shop_wrapper" id="information">
                                <h2 className="shop_title flex1">
                                    <button className="cuisine_name" onClick={this.cuisine_name_btnClick}>義式料理</button>
                                </h2>
                                <div className="top_flex">
                                    <h4 className="shop_title flex4">Aqua Tea 水相餐廳</h4>
                                    <button className="shop_menu" onClick={this.menu_btnClick} id="menu_btn">菜單</button>
                                </div>
                                <div id="menu" className="modal_menu">
                                    <div className="modal_content_menu">
                                        <div className="container_menu" id="menu_content">
                                            <div onClick={this.menu_none} className="button display_top_right">&times;</div>
                                            <br />
                                            <br />
                                            <img src={require("../img/aqua/menu1.jpg")} alt="aqua菜單" />
                                            <img src={require("../img/aqua/menu2.jpg")} alt="aqua菜單" />
                                            <img src={require("../img/aqua/menu3.jpg")} alt="aqua菜單" />
                                            <img src={require("../img/aqua/menu4.jpg")} alt="aqua菜單" />
                                        </div>
                                    </div>
                                </div>
                                <div className="top_flex">
                                    <div className="shop_rate_wrapper">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                    <div>
                                        <i className="far fa-comment-alt"></i>
                                        <span id="shop_comment_no">2</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="top_flex">
                                    <div className="shop_item">營業時間</div>
                                    <div className="flex1 time">
                                        <span id="shop_time">周一～周五 11：00～22：00<br />周日 11：30 ～22：00</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="top_flex">
                                    <div className="shop_item">地　　址</div>
                                    <div className="flex1 address">
                                        <i className="fas fa-map-marked-alt"></i> &nbsp;
                                        <span id="shop_address">台中市北屯區經貿三路二段100號</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="top_flex">
                                    <div className="shop_item">電　　話</div>
                                    <div className="flex1 tel">
                                        <span id="shop_tel">04-2426-4288</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="top_flex">
                                    <div className="shop_item">備　　註</div>
                                    <div className="flex1 remark">
                                        <span id="shop_remark">1. 用餐時間限制 90 分鐘<br />2. 室內禁止吸菸</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="service_box">
                                    <div className="service_div" id="demo">
                                        <div>
                                            <span className="icon-credit-card" title="支援信用卡">
                                                <i className="fas fa-credit-card"></i>支援信用卡
                                            </span>
                                        </div>
                                        <div>
                                            <span className="icon-wifi" title="提供 wifi">
                                                <i className="fas fa-wifi"></i>提供 wifi
                                            </span>
                                        </div>
                                        <div>
                                            <span className="icon-baby" title="提供兒童座椅">
                                                <i className="fas fa-baby"></i>提供兒童座椅
                                            </span>
                                        </div>
                                        <div>
                                            <span className="icon-service-fee" title="收取服務費">
                                                <i className="fas fa-hand-holding-usd"></i>收取服務費
                                            </span>
                                        </div>
                                        <div>
                                            <span className="icon-papper-plane" title="提供外送">
                                                <i className="fas fa-paper-plane"></i>提供外送
                                            </span>
                                        </div>
                                        <div>
                                            <span className="icon-shopping-bag" title="提供外帶">
                                                <i className="fas fa-shopping-bag"></i>提供外帶
                                            </span>
                                        </div>
                                        <div>
                                            <span className="icon-time-limit" title="用餐時間">
                                                <i className="fas fa-user-clock"></i>用餐時間
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <hr />

                            </div>

                            <div className="shop_wrapper" id="comment">
                                <div className="top_flex">
                                    <h4 className="shop_title flex1">評論
                                        <span className="comment_total">(2)</span>
                                    </h4>
                                    <a href="" title="新增評論" className="show_comment_modal">
                                        <i className="fas fa-plus-circle"></i>
                                        <span id="add_comment"></span>
                                    </a>
                                </div>
                                <div className="comment_box">
                                    <div className="comment_item">
                                        <div className="comment_left">
                                            <div className="mid_flex">
                                                <div className="comment_img_wrapper">
                                                    <img src={require("../img/user.png")} alt="member_img" className="comment_img" />
                                                </div>
                                                <div className="flex1">
                                                    <div className="top_flex">
                                                        <div className="flex1">王曉明</div>
                                                        <div className="record_time">2022-02-02 17:00:45</div>
                                                    </div>
                                                    <div className="top_flex">
                                                        <div className="shop_rate_wrapper flex1">
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main_comment">
                                                <p>好吃^_^</p>
                                            </div>
                                        </div>
                                        <div className="comment_right">
                                            <ul className="comment_right_pic">
                                                <li className="pic_item">
                                                    <img src={require("../img/餐點1.jpg")} alt="餐點照片" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="comment_item">
                                        <div className="comment_left">
                                            <div className="mid_flex">
                                                <div className="comment_img_wrapper">
                                                    <img src={require("../img/user.png")} alt="member_img" className="comment_img" />
                                                </div>
                                                <div className="flex1">
                                                    <div className="top_flex">
                                                        <div className="flex1">李珍珍</div>
                                                        <div className="record_time">2021-08-09 15:30:05</div>
                                                    </div>
                                                    <div className="top_flex">
                                                        <div className="shop_rate_wrapper flex1">
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                            <i className="far fa-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main_comment">
                                                <p>真的太好吃了，下次還會再來！</p>
                                            </div>
                                        </div>
                                        <div className="comment_right">
                                            <ul className="comment_right_pic">
                                                <li className="pic_item">
                                                    <img src={require("../img/餐點2.jpg")} alt="餐點照片" />
                                                    <img src={require("../img/餐點3.jpg")} alt="餐點照片" />
                                                    <img src={require("../img/餐點4.jpg")} alt="餐點照片" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space"></div>
                        </div> 
                    </div>
                </section>

                <button type="button" className="ontop_btn" onClick={this.topfunction}>
                    <i className="fas fa-arrow-up"></i>
                </button>

                <div class="footer_page">
                    <Footer />
                </div>

            </React.Fragment>
        );
    }
}
 
export default Restaurant_page;