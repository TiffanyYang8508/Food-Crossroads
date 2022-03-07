import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Axios from "axios";
import $ from "jquery";
import Headeredit from './header copy';
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


        // var cart = [];
        // if (localStorage.getItem("cart")) {
        //     cart = JSON.parse(sessionStorage.getItem("cart"));
        // }
        // setCart();







        // function setCart() {
        //     var cartList = "", s_price = 0, total = 0;
        //     for (let $i = 0; $i < cart.length; $i++) {
        //         s_price = cart[$i]["price"] * cart[$i]["amount"];
        //         total += s_price;
        //         cartList += `<li> ${cart[$i]["name"]} , 單價: ${cart[$i]["price"]}, 數量: ${cart[$i]["amount"]
        //             }, 總價: ${s_price}</li>`;
        //     }
        //     $("#cart")
        //         .empty()
        //         .append(cartList);
        //     // $("#total").text(total);
        // }


        // $("#clear").click(function () {
        //     cart = [];
        //     localStorage.removeItem("cart");
        //     // setCart();
        // });

        // 加入購物車按鈕
        // $(".add_cart").click(function () {
        //     // let product = $(this).closest(".food_list_detail");
        //     // let newItem = {
        //     //     name: product.find(".food_name").text(),
        //     //     price: product.find(".dollar").text(),
        //     //     amount: product.find("#qty_number").val(),
        //     // };
        //     // console.log(newItem);
        //     // cart.push(newItem);
        //     // localStorage.setItem("cart", JSON.stringify(cart));
        //     // setCart();
        // });

        // console.log(cart);

        //揪團訂餐
        $(".group_button").on("click", function () {
            $("#order_group_comfirm").show();
        });

        $(".btn_yes").on('click', function () {
            $('#group_order').show();
            $("#order_group_comfirm").hide();
        })


        $('.btn_cancel').on('click', function () {
            $("#order_group_comfirm").hide();
        })

        $('.btn_cancel_group').on('click', function () {
            $("#group_order").hide();
        })


        //購物車餐點備註
        $('add_cart').click(function () {
            $('#order_note').show();
            // console.log('ok');
        })

        $('.char_alert_1').hide();
        $('.btn_add_cart').on('click', function () {
            // console.log('ok');
            $('#order_note').show();
        })

        $('.btn_cancel').on('click', function () {
            $('#order_note').hide();
        })

        $('#char_alert_2').css('display', 'none')
        $('.btn_yes_order_note').on('click', function () {
            $('#order_note').hide();
            $('.char_alert_1').css('display', 'block');
            // $('#char_alert_2').css('display', 'block')
        })
    }





    // 置頂按鈕:點選後回到頂端
    upToTop = () => {
        window.scrollTo({
            top: 100,
            behavior: "smooth"
        });
    }




    // 跳頁面
    btncheckout = () => {
        window.location.href = 'shoppingchar.html';
    }

    btn_grouporder = () => {
        window.location.href = 'orderpage_group_order_on.html';
    }

    btn_group1 = () => {
        window.location = "#group_1";
    }

    btn_group2 = () => {
        window.location = "#group_2";
    }

    btn_group3 = () => {
        window.location = "#group_3";
    }
    btn_group4 = () => {
        window.location = "#group_4";
    }
    btn_group5 = () => {
        window.location = "#group_5";
    }
    btn_group6 = () => {
        window.location = "#group_6";
    }
    btn_group7 = () => {
        window.location = "#group_7";
    }
    btn_group8 = () => {
        window.location = "#group_8";
    }
    btn_group9 = () => {
        window.location = "#group_9";
    }
    btn_group10 = () => {
        window.location = "#group_10";
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
                <header className="header_page">
                    <Headeredit />
                </header>

                <div className="scroll menu_group sticky-top">
                    <div className="container-fluid" id="menu_group">
                        <button className="oval menu_group_list">開胃菜</button>

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
                    <div ></div>
                    <div className="d-flex flex-column" >
                        {/* 類別標題 */}
                        <div className="food_title" >
                            <h3>開胃菜</h3>
                        </div>
                        <div className='group_1'></div>
                        <div id="cate1" class="cate1">
                            <div className="row">
                                {this.state.Order1.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row ">
                                                <p><span className="dollar align-self-center">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_2"></div>
                        {/* 類別標題 */}
                        <div className="food_title">
                            <h3>沙拉</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_3"></div>
                        <div className="food_title" >
                            <h3>義式燉飯</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_4"></div>
                        <div className="food_title" >
                            <h3>義大利麵</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_5"></div>
                        <div className="food_title" >
                            <h3>甜品</h3>
                        </div>
                        <div id="cate1" class="cate1">
                            <div className="row" >
                                {this.state.Order5.map((item, index) =>
                                    <div key={index} className="food_list_detail food_list_border col-sm-8 col-lg-4">
                                        <div>
                                            <img src={Order_picture} className="food_img" />
                                        </div>
                                        <div className="food_dollar_qty">
                                            <p className="food_name">{item.food_name}</p>
                                            <div className="d-flex flex-row">
                                                <p><span className="dollar align-self-display', 'blockcenter">{item.food_amount}</span>元</p>
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_6"></div>
                        <div className="food_title" >
                            <h3>茶品</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_7"></div>
                        <div className="food_title" >
                            <h3>咖啡</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_8"></div>
                        <div className="food_title">
                            <h3>果汁</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                        <div className="blank" id="group_9"></div>
                        <div className="food_title">
                            <h3>酒品</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
                                                <input type="text" id="qty_number" value="1" />
                                                <input type="button" value="+" className="btn_count add" onClick={this.qty} />
                                            </div>
                                        </div>

                                        <div>
                                            <button className="btn_add_cart add_cart" onClick={this.addTocart} data-toggle="modal" data-target="#char_remark_modal">加入購物車</button>
                                        </div>
                                    </div>

                                )}
                            </div>
                        </div>
                        {/* 類別標題 */}
                        <div className="blank" id="group_10"></div>
                        <div className="food_title">
                            <h3>水</h3>
                        </div>
                        <div id="cate1" class="cate1">
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
                                                <input type="button" value="-" className="btn_count count_decrease sub char_qty" onClick={this.qty} />
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
                            <dir className="blank"></dir>
                        </div>






                        {/* 加入購物車訊息 */}
                        {/* <div className="char_alert_1">
                            <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                            <strong><i className='fas fa-shopping-cart'></i>  您的餐點已新增至購物車</strong>
                        </div> */}
                        {/* <div id="char_alert_2">
                            <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                            <strong><i className='fas fa-shopping-cart'></i>  您的餐點已新增至購物車</strong>
                        </div> */}
                        {/* <div id="char_alert_3">
                            <span className="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                            <strong><i className='fas fa-shopping-cart'></i>  您的餐點已新增至購物車</strong>
                        </div> */}

                        {/* {加入購物車之餐點備註} */}
                        <div className="modal" id="order_note">
                            <div className="modal-content group_order_content">
                                <div className="modal-header">
                                    <h4 className="modal-title group_order_title ">餐點備註</h4>
                                </div>
                                <div className="modal-body">
                                    <input type="text" />
                                </div >
                                <p id='group_order_ex'>範例：加辣、不要辣、蔥多、油醋多....</p>
                                <div className="modal-footer">
                                    <button type="button" className="btn_cancel">取消</button>
                                    <button type="button" className="btn_yes_order_note">確定</button>
                                </div>
                            </div>
                        </div>

                        {/* 揪團結帳 */}
                        <div className="food_order_group d-flex flex-column">
                            <div className="d-flex justify-content-center">
                                <img src={require("../img/people_plus@3x.png")} style={{ 'width': '25px', 'height': '20px', 'marginRight': ' 5px' }} />
                                <button className="group_button oval delete-shopping" id='open_order_group' >揪團</button>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Link to="/shoppingchar"><button id="checkout">去結帳</button></Link>
                            </div>
                            {/* 我要清空用(localStorage會留紀錄)
                            <button id='clear'>清空購物車</button> */}
                        </div>

                        {/* 確定開啟揪團連結嗎 */}
                        <div className="modal delete_comfirm " id="order_group_comfirm">
                            <div className="modal-content group_order_content">
                                <div className="modal-header">
                                    <h4 className="modal-title group_on_modal_title">是否開啟揪團功能?</h4>
                                </div>
                                <div className="modal-body ">
                                    <h5 id='open_grouporder'>開啟揪團功能<br />即可分享點餐連結給好友們一同訂餐！</h5>
                                </div >
                                <div className="modal-footer">
                                    <button type="button" className="btn_cancel">取消</button>
                                    <button type="button" className="btn_yes">確定</button>
                                </div>
                            </div>
                        </div>


                        {/* <!--揪團連結分享modal--> */}
                        <div className="modal " id="group_order">
                            <div className="modal-content group_order_content">
                                <div className="modal-header">
                                    <h4 className="modal-title group_on_modal_title">已開啟</h4>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span
                                        aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body d-flex flex-column">
                                    <h5 className='grop_order_share'>分享你的連結！！</h5><br />
                                    <div id="copy_link">
                                        <a href="orderpage_group_sorder_on.html"><input id="copyinput"
                                            value="http://localhost:3000/orderpage/group_order/1" /></a><br />
                                    </div>
                                    <button type="button" className="btn btn-danger btn_copy" onClick={this.copyinput}>複製連結</button>
                                </div >
                                <div className="modal-footer">
                                    <button type="button" className="btn_cancel_group">關閉</button>
                                </div>
                            </div>
                        </div>


                        {/* 置頂鈕 */}
                        <div>
                            <button type="button" id="btn_back_to_top" onClick={this.upToTop}>
                                <i className="fas fa-arrow-up"></i>
                            </button>

                        </div>
                    </div>
                </div >

                {/* <Box sx={{ width: '50%' }} spacing={6}>

                    <Alert onClose={() => { }} severity="success" color="warning" action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>}>
                        <AlertTitle>餐點新增成功</AlertTitle>
                        This is a success alert — check it out!</Alert>

                </Box> */}


                <div div className="footer_page" >
                    <Footer />
                </div >

            </React.Fragment >
        );
    }
}


export default Orderpage;