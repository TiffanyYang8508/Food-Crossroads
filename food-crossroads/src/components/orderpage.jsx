import React, { Component } from 'react';

import "../fontawesome-free-5.15.4-web/css/all.min.css";
import "../css/style.css";
import Header from './header';
import Footer from './footer';
import "../css/orderpage.css";

class Orderpage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <div class="scroll menu_group sticky-top">
                    <div class="container-fluid" id="menu_group">
                        <button type="button" class="oval menu_group_list" onclick="javascript:btn_group1();">開胃菜</button>
                        <button type="button" class="oval menu_group_list" onclick="jabascript:btn_group2();">沙拉</button>
                        <button type="button" class="oval menu_group_list" onclick="javascript:btn_group3();">湯</button>
                        <button type="button" class="oval menu_group_list">義式燉飯</button>
                        <button type="button" class="oval menu_group_list">義大利麵</button>
                        <button type="button" class="oval menu_group_list">主廚排餐</button>
                        <button type="button" class="oval menu_group_list">甜品</button>
                        <button type="button" class="oval menu_group_list">茶品</button>
                        <button type="button" class="oval menu_group_list">咖啡</button>
                        <button type="button" class="oval menu_group_list">果汁</button>
                        <button type="button" class="oval menu_group_list">酒品</button>
                        <button type="button" class="oval menu_group_list">水</button>
                    </div>
                </div>

                <nav aria-label="breadcrumb" class="breaddiv">
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html"><span>首頁</span></a></li>
                        <li class="breadcrumb-item"><a href="restaurant_page.html"><span>aqua水相餐廳</span></a></li>
                        <li class="breadcrumb-item active" aria-current="page"><span>我要訂餐</span></li>
                    </ul>
                </nav>

                <div id="group_1" class="d-flex flex-column">
        <div class="food_title">
            <h3>開胃菜</h3>
        </div>
        <div id="cate1">
            <div class="food_list_border">
                <div class="food_list_detail">
                    <div>
                        <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                    </div>
                    <div class="food_dollar_qty">
                        <p class="food_name">西西里海鹽柴魚脆薯</p>
                        <div class="d-flex flex-row">
                            <p><span class="dollar align-self-center">188</span>元</p>
                            <input type="button" value="-" class="btn_count count_decrease sub" onclick="qty()" />
                            <input type="text" id="qty_number" value="1" />
                            <input type="button" value="+" class="btn_count add" onclick="qty()" />
                        </div>
                    </div>
                    <div>
                        <button class="btn_add_cart">加入購物車</button>
                    </div>
                </div>
            </div>
            <div class="food_list_border food_list_border2">
                <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                <div class="food_dollar_qty">
                    <p class="food_name">日本海炸牡蠣</p>
                    <div class="d-flex flex-row">
                        <p><span class="dollar align-self-center">288</span>元</p>
                        <input type="button" value="-" class="btn_count count_decrease sub" />
                        <input type="text" id="qty_number" value="1" />
                        <input type="button" value="+" class="btn_count add" />
                    </div>
                </div>
                <div>
                    <button class="btn_add_cart">加入購物車</button>
                </div>
            </div>

            <div class="food_list_border">
                <div class="food_list_detail">
                    <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                    <div class="food_dollar_qty">
                        <p class="food_name">南義炸起司條</p>
                        <div class="d-flex flex-row">
                            <p><span class="dollar align-self-center">188</span>元</p>
                            <input type="button" value="-" class="btn_count count_decrease sub" />
                            <input type="text" id="qty_number" value="1" />
                            <input type="button" value="+" class="btn_count add" />
                        </div>
                    </div>
                    <div>
                        <button class="btn_add_cart">加入購物車</button>
                    </div>
                </div>
            </div>
            <div class="food_list_border food_list_border2">
                <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                <div class="food_dollar_qty">
                    <p class="food_name">墨西哥酸辣雞翅</p>
                    <div class="d-flex flex-row">
                        <p><span class="dollar align-self-center">288</span>元</p>
                        <input type="button" value="-" class="btn_count count_decrease sub" />
                        <input type="text" id="qty_number" value="1" />
                        <input type="button" value="+" class="btn_count add" />
                    </div>
                </div>
                <div>
                    <button class="btn_add_cart">加入購物車</button>
                </div>
            </div>

            <div class="food_list_border">
                <div class="food_list_detail">
                    <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                    <div class="food_dollar_qty">
                        <p class="food_name">地中海白酒烘煮鮮蛤</p>
                        <div class="d-flex flex-row">
                            <p><span class="dollar align-self-center">288</span>元</p>
                            <input type="button" value="-" class="btn_count count_decrease sub" />
                            <input type="text" id="qty_number" value="1" />
                            <input type="button" value="+" class="btn_count add" />
                        </div>
                    </div>
                    <div>
                        <button class="btn_add_cart">加入購物車</button>
                    </div>
                </div>
            </div>
            <div class="food_list_border food_list_border2">
                <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                <div class="food_dollar_qty">
                    <p class="food_name">鸚嘴豆番茄燉牛肚</p>
                    <div class="d-flex flex-row">
                        <p><span class="dollar align-self-center">288</span>元</p>
                        <input type="button" value="-" class="btn_count count_decrease sub" />
                        <input type="text" id="qty_number" value="1" />
                        <input type="button" value="+" class="btn_count add" />
                    </div>
                </div>
                <div>
                    <button class="btn_add_cart">加入購物車</button>
                </div>
            </div>

            <div class="food_list_border">
                <div class="food_list_detail">
                    <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                    <div class="food_dollar_qty">
                        <p class="food_name">澳洲頂級橄欖油清炒野菇</p>
                        <div class="d-flex flex-row">
                            <p><span class="dollar align-self-center">288</span>元</p>
                            <input type="button" value="-" class="btn_count count_decrease sub" />
                            <input type="text" id="qty_number" value="1" />
                            <input type="button" value="+" class="btn_count add" />
                        </div>
                    </div>
                    <div>
                        <button class="btn_add_cart">加入購物車</button>
                    </div>
                </div>
            </div>
            <div class="food_list_border food_list_border2">
                <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                <div class="food_dollar_qty">
                    <p class="food_name">義式清炒櫛瓜鮮蝦</p>
                    <div class="d-flex flex-row">
                        <p><span class="dollar align-self-center">288</span>元</p>
                        <input type="button" value="-" class="btn_count count_decrease sub" />
                        <input type="text" id="qty_number" value="1" />
                        <input type="button" value="+" class="btn_count add" />
                    </div>
                </div>
                <div>
                    <button class="btn_add_cart">加入購物車</button>
                </div>
            </div>

        </div>

    </div>





                <Footer />
            </React.Fragment>
        );
    }
}

export default Orderpage;