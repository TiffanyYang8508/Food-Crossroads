import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";
import $ from "jquery";
import Header from './header';
import Footer from './footer';
import "../css/orderpage.css";
import Order_picture from "../img/aqua/aqua_img.jpg";




class Orderpage extends Component {


    state = {

        Order1: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order2: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order3: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order4: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order5: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order6: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order7: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order8: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order9: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
        Order10: [{
            food_name: "日本海炸牡蠣",
            food_amount: "288",
            food_category: "開胃菜",
        }],
    }




    async componentDidMount() {
        var url = `http://localhost:8000/orderpage/`;
        var result = await Axios.get(url);
        this.state.Order1 = result.data.filter(function (item, index, array) {
            return item.food_category == "開胃菜";
        });
        this.state.Order2 = result.data.filter(function (item, index, array) {
            return item.food_category == "沙拉";
        });
        this.state.Order3 = result.data.filter(function (item, index, array) {
            return item.food_category == "義式燉飯";
        });
        this.state.Order4 = result.data.filter(function (item, index, array) {
            return item.food_category == "義大利麵";
        });
        this.state.Order5 = result.data.filter(function (item, index, array) {
            return item.food_category == "甜品";
        });
        this.state.Order6 = result.data.filter(function (item, index, array) {
            return item.food_category == "茶品";
        });
        this.state.Order7 = result.data.filter(function (item, index, array) {
            return item.food_category == "咖啡";
        });
        this.state.Order8 = result.data.filter(function (item, index, array) {
            return item.food_category == "果汁";
        });
        this.state.Order9 = result.data.filter(function (item, index, array) {
            return item.food_category == "酒品";
        });
        this.state.Order10 = result.data.filter(function (item, index, array) {
            return item.food_category == "水";
        });
        this.setState({});

        var cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(sessionStorage.getItem("cart"));
        }
        setCart();



        function setCart() {
            var cartList = "", s_price = 0, total = 0;
            for (let $i = 0; $i < cart.length; $i++) {
                s_price = cart[$i]["price"] * cart[$i]["amount"];
                total += s_price;
                cartList += `<li> ${cart[$i]["name"]} , 單價: ${cart[$i]["price"]}, 數量: ${cart[$i]["amount"]
                    }, 總價: ${s_price}</li>`;
            }
            $("#cart")
                .empty()
                .append(cartList);
            // $("#total").text(total);
        }

        $("#clear").click(function () {
            cart = [];
            localStorage.removeItem("cart");
            setCart();
        });

        // 加入購物車按鈕
        $(".add_cart").click(function () {
            let product = $(this).closest(".food_list_detail");
            let newItem = {
                name: product.find(".food_name").text(),
                price: product.find(".dollar").text(),
                amount: product.find("#qty_number").val(),
            };
            console.log(newItem);
            cart.push(newItem);
            localStorage.setItem("cart", JSON.stringify(cart));
            setCart();
        });

        console.log(cart);
    }

    // 置頂按鈕:點選後回到頂端
    topfunction = () => {
        document.documentElement.scrollTop = 0;
    }

    // 跳頁面
    btncheckout = () => {
        window.location.href = 'shoppingchar.html';
    }

    btn_grouporder = () => {
        window.location.href = 'orderpage_group_order_on.html';
    }

    btn_group1 = () => {
        window.location.hash = "#group_1";
    }

    btn_group2 = () => {
        window.location.hash = "#group_2";
    }

    btn_group3 = () => {
        window.location.hash = "#group_3";
    }
    btn_group4 = () => {
        window.location.hash = "#group_4";
    }
    btn_group5 = () => {
        window.location.hash = "#group_5";
    }
    btn_group6 = () => {
        window.location.hash = "#group_6";
    }
    btn_group7 = () => {
        window.location.hash = "#group_7";
    }
    btn_group8 = () => {
        window.location.hash = "#group_8";
    }
    btn_group9 = () => {
        window.location.hash = "#group_9";
    }
    btn_group10 = () => {
        window.location.hash = "#group_10";
    }

    btn_orderdisaplay = () => {
        window.location.href = 'orderdisaplay.html';
    }

    qty = () => {
        var aAdd = document.querySelectorAll(".add");
        var sub = document.querySelectorAll(".sub");
        for (var i = 0; i < aAdd.length; i++) {
            aAdd[i].onclick = function () {
                var num = Number(this.previousElementSibling.value);
                num++;
                this.previousElementSibling.value = num;
            }
        }
        for (var i = 0; i < sub.length; i++) {
            sub[i].onclick = function () {
                var num = Number(this.nextElementSibling.value);
                if (num > 1) {
                    num--;
                }
                this.nextElementSibling.value = num;
            }
        }
    }




    copyinput = () => {
        document.getElementById('copyinput').select()
        document.execCommand('copy')
    }


    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="scroll menu_group sticky-top">
                    <div className="container-fluid" id="menu_group">
                        <button className="oval menu_group_list" onClick={this.btn_group1}>開胃菜</button>

                        <button className="oval menu_group_list" onClick={this.btn_group2}>沙拉</button>
                        <button className="oval menu_group_list" >湯</button>
                        <button className="oval menu_group_list" onClick={this.btn_group3}>義式燉飯</button>
                        <button className="oval menu_group_list" onClick={this.btn_group4}>義大利麵</button>
                        <button className="oval menu_group_list" >主廚排餐</button>
                        <button className="oval menu_group_list" onClick={this.btn_group5}>甜品</button>
                        <button className="oval menu_group_list" onClick={this.btn_group6}>茶品</button>
                        <button className="oval menu_group_list" onClick={this.btn_group7}>咖啡</button>
                        <button className="oval menu_group_list" onClick={this.btn_group8}>果汁</button>
                        <button className="oval menu_group_list" onClick={this.btn_group9}>酒品</button>
                        <button className="oval menu_group_list" onClick={this.btn_group10}>水</button>
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

                    <div className="d-flex flex-column">
                        {/* 類別標題 */}
                        <div className="food_title">
                            <h3>開胃菜</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" id="group_1">
                                {this.state.Order1.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>

                        {/* 類別標題 */}
                        <div className="food_title" id="group_2">
                            <h3>沙拉</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order2.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_3">
                            <h3>義式燉飯</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order3.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_4">
                            <h3>義大利麵</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order4.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_5">
                            <h3>甜品</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order5.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_6">
                            <h3>茶品</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order6.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_7">
                            <h3>咖啡</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order7.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_8">
                            <h3>果汁</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order8.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_9">
                            <h3>酒品</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order9.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="food_title" id="group_10">
                            <h3>水</h3>
                        </div>
                        <div id="cate1">
                            <div className="row" >
                                {this.state.Order10.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>





                        {/* {加入購物車之餐點備註} */}
                        <div class="modal fade" id="char_remark_modal" tabindex="-1" role="dialog" aria-labelledby="char_remark_modal_title"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="char_remark_modal_title">餐點備註</h3><br />
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="text" />
                                        <p>範例：加辣、不要辣、蔥多、油醋多....</p>
                                    </div>
                                    <div class="modal-footer d-flex justify-content-center">
                                        <button type="button" class="btn_cancel" data-dismiss="modal">取消</button>
                                        <button type="button" class="btn_yes" data-dismiss="modal">確定</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 揪團結帳 */}
                        <div className="food_order_group d-flex flex-column">
                            <div className="d-flex justify-content-center">
                                <a href="#"><img src={require("../img/people_plus@3x.png")} style={{ 'width': '25px', 'height': '20px', 'margin-right': ' 5px' }} /></a>
                                <button className="group_button oval" data-toggle="modal" data-target="#order_group_modal">揪團</button>

                            </div>
                            <div className="d-flex justify-content-center">
                                <Link to="/shoppingchar"><button id="checkout">去結帳</button></Link>
                            </div>
                            {/* 我要清空用(localStorage會留紀錄) */}
                            <button id='clear'>清空購物車</button>
                        </div>




                        {/* <!--揪團開啟確認modal--> */}
                        <div class="modal fade" id="order_group_modal" tabindex="-1" role="dialog" aria-labelledby="order_group_modal_title"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h3 class="modal-title" id="order_group_modal_title">是否開啟揪團功能？</h3><br />
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                            aria-hidden="true">&times;</span></button>
                                    </div>
                                    <div class="modal-body">
                                        <h5>開啟揪團功能<br />即可分享點餐連結給好友們一同訂餐！</h5>
                                    </div>
                                    <div class="modal-footer d-flex justify-content-center">
                                        <button type="button" class="btn_cancel" data-dismiss="modal">取消</button>
                                        <button type="button" class="btn_yes" data-toggle="modal" data-target="#group_on_modal">確定</button>
                                    </div>
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

                            {/* <!--揪團連結分享modal--> */}
                            <div class="modal fade" id="group_on_modal" tabindex="-1" role="dialog" aria-labelledby="group_on_modal_title"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h3 class="modal-title" id="group_on_modal_title">已開啟</h3><br />
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                                                aria-hidden="true">&times;</span></button>
                                        </div>
                                        <div class="modal-body d-flex flex-column">
                                            <h5>分享你的連結！！</h5>
                                            <div id="copy_link">
                                                <a href="orderpage_group_sorder_on.html"><input id="copyinput"
                                                    value="http://localhost:3000/group_order_on/1" /></a>
                                            </div>
                                            <button type="button" class="btn btn-danger btn_copy" onclick='copyinput()'>複製連結</button>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal"
                                                onclick="btn_grouporder()">關閉</button>
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
                </div>

                <Footer />

            </React.Fragment>
        );
    }
}

export default Orderpage;