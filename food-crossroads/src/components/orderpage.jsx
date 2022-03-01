import React, { Component } from 'react';
import { useState } from "react";
import Axios from "axios";
import $ from "jquery";
import Header from './header';
import Footer from './footer';
import "../css/orderpage.css";
import Order_picture from "../img/aqua/aqua_img.jpg";

class Orderpage extends Component {


    state = {

        Order: [{
            resturant_id: "aqua水相餐廳",
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category_id: "1"
        }]
    }


    async componentDidMount() {
        if(this.props.match.params.food_category === undefined){
            var url=`http://localhost:8000/orderpage`;
        }else{
            var url = `http://localhost:8000/orderpage/${this.props.match.params.food_category}`;
        }
        var result = await Axios.get(url);
        this.state.Order = result.data;
        this.setState({});
    }

    btn_group1 = () => {
        $("html").animate({ scrollTop: 50 }, 300);
    }

    btn_group2 = () => {
        $("html").animate({ scrollTop: 1050 }, 300);
    }

    btn_group3 = () => {
        $("html").animate({ scrollTop: 1250 }, 300);

    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="scroll menu_group sticky-top">
                    <div className="container-fluid" id="menu_group">
                        <a href='http://localhost:3000/orderpage/開胃菜' className="oval menu_group_list" onClick={this.btn_group1}>開胃菜</a>
                        <a href='http://localhost:3000/orderpage/沙拉' className="oval menu_group_list" onClick={this.btn_group2}>沙拉</a>
                        <a href='http://localhost:3000/orderpage/湯' type="button" className="oval menu_group_list" onClick={this.btn_group3}>湯</a>
                        <a href='http://localhost:3000/orderpage/義式燉飯' type="button" className="oval menu_group_list" >義式燉飯</a>
                        <a href='http://localhost:3000/orderpage/義大利麵' type="button" className="oval menu_group_list" >義大利麵</a>
                        <a href='http://localhost:3000/orderpage/主廚排餐' type="button" className="oval menu_group_list" >主廚排餐</a>
                        <a href='http://localhost:3000/orderpage/甜品' type="button" className="oval menu_group_list" >甜品</a>
                        <a href='http://localhost:3000/orderpage/茶品' type="button" className="oval menu_group_list" >茶品</a>
                        <a href='http://localhost:3000/orderpage/咖啡' type="button" className="oval menu_group_list" >咖啡</a>
                        <a href='http://localhost:3000/orderpage/果汁' type="button" className="oval menu_group_list" >果汁</a>
                        <a href='http://localhost:3000/orderpage/酒品' type="button" className="oval menu_group_list" >酒品</a>
                        <a href='http://localhost:3000/orderpage/水' type="button" className="oval menu_group_list" >水</a>
                    </div>
                </div>

                <nav aria-label="breadcrumb" className="breaddiv">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/"><span>首頁</span></a></li>
                        <li className="breadcrumb-item"><a href="/"><span>aqua水相餐廳</span></a></li>
                        <li className="breadcrumb-item active" aria-current="page"><span>我要訂餐</span></li>
                    </ul>
                </nav>


                <div id='order_page'>
                    
                    <div id="group_1" className="d-flex flex-column">

                        <div className="food_title">
                            <h3>{this.props.match.params.food_category}</h3>
                        </div>

                        <div id="cate1">

                            <div className="row" >

                                {this.state.Order.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">

                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onclick="qty()" />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onclick="qty()" />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart">加入購物車</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>


                        {/* <div id="group_2" className="d-flex flex-column">
                            <div className="food_title">
                                <h3>沙拉</h3>
                            </div>
                            <div id="cate2">
                                <div className="food_list_border">
                                    <div className="food_list_detail">
                                        <img src={Order_picture} className="food_img" />
                                        <div className="food_dollar_qty">
                                            <p className="food_name">番茄羅勒起司搭頂級陳年油醋</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">188</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onclick="qty()" />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onclick="qty()" />
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn_add_cart">加入購物車</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="food_list_border food_list_border2">
                                    <img src={Order_picture} className="food_img" />
                                    <div className="food_dollar_qty">
                                        <p className="food_name">田園香橙鮮蝦蘿蔓鮮蔬</p>
                                        <div className="d-flex flex-row">
                                            <p><span className="dollar align-self-center">188</span>元</p>
                                            <input type="button" value="-" className="btn_count count_decrease sub" onclick="qty()" />
                                            <input type="text" id="qty_number" value="1" />
                                            <input type="button" value="+" className="btn_count add" onclick="qty()" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn_add_cart">加入購物車</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* <div id="group_3" className="d-flex flex-column">
                            <div className="food_title">
                                <h3>湯</h3>
                            </div>
                            <div id="cate3">
                                <div className="food_list_border">
                                    <div className="food_list_detail">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">水相主廚私房湯品</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">188</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onclick="qty()" />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onclick="qty()" />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart">加入購物車</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="food_list_border food_list_border2">
                                    <img src={Order_picture} className="food_img" />
                                    <div className="food_dollar_qty">
                                        <p className="food_name">法式金黃南瓜堅果濃湯</p>
                                        <div className="d-flex flex-row">
                                            <p><span className="dollar align-self-center">188</span>元</p>
                                            <input type="button" value="-" className="btn_count count_decrease sub" onclick="qty()" />
                                            <input type="text" id="qty_number" value="1" />
                                            <input type="button" value="+" className="btn_count add" onclick="qty()" />
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn_add_cart">加入購物車</button>
                                    </div>
                                </div>
                            </div>

                        </div> */}

                        {/* 揪團結帳 */}
                        <div className="food_order_group d-flex flex-column">
                            <div className="d-flex justify-content-center">
                                <a href="#"><img src="./img/people_plus@3x.png" style={{ 'width': '25px', 'height': '20px', 'margin-right': ' 5px' }} /></a>
                                <button className="group_button oval" data-toggle="modal" data-target="#order_group_modal">揪團</button>

                            </div>
                            <div className="d-flex justify-content-center">
                                <button id="checkout" onclick="btncheckout()">去結帳</button>
                            </div>
                        </div>


                        <div className="modal fade" id="order_group_modal" tabindex="-1" role="dialog" aria-labelledby="order_group_modal_title"
                            aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title" id="order_group_modal_title">是否開啟揪團功能？</h3><br />
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div className="modal-body">
                                        <h5>開啟揪團功能<br />即可分享點餐連結給好友們一同訂餐！</h5>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">
                                        <button type="button" className="btn_cancel" data-dismiss="modal">取消</button>
                                        <button type="button" className="btn_yes" data-toggle="modal" data-target="#group_on_modal">確定</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 置頂鈕 */}
                        <button type="button" id="btn_back_to_top" onclick="topfunction()" title="Go to top">
                            <i className="fas fa-arrow-up"></i>
                        </button>

                    </div>
                </div>
                <Footer />

            </React.Fragment>
        );
    }
}

export default Orderpage;