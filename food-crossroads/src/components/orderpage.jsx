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

                {/* 商品分類1 */}
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
                {/* 商品分類2 */}
                <div id="group_2" class="d-flex flex-column">
                    <div class="food_title">
                        <h3>沙拉</h3>
                    </div>
                    <div id="cate2">
                        <div class="food_list_border">
                            <div class="food_list_detail">
                                <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                                <div class="food_dollar_qty">
                                    <p class="food_name">番茄羅勒起司搭頂級陳年油醋</p>
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
                                <p class="food_name">田園香橙鮮蝦蘿蔓鮮蔬</p>
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

                        <div class="food_list_border">
                            <div class="food_list_detail">
                                <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                                <div class="food_dollar_qty">
                                    <p class="food_name">北歐蜂蜜柚香煙燻鮭魚羽衣甘藍</p>
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
                                <p class="food_name">瀨戶柚香胡麻堅果牛排羽衣甘藍</p>
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
                </div>
                {/* 商品分類3 */}
                <div id="group_3" class="d-flex flex-column">
                    <div class="food_title">
                        <h3>湯</h3>
                    </div>
                    <div id="cate3">
                        <div class="food_list_border">
                            <div class="food_list_detail">
                                <div>
                                    <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                                </div>
                                <div class="food_dollar_qty">
                                    <p class="food_name">水相主廚私房湯品</p>
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
                                <p class="food_name">法式金黃南瓜堅果濃湯</p>
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

                        <div class="food_list_border">
                            <div class="food_list_detail">
                                <img src="./img/aqua/aqua_img.jpg" class="food_img" />
                                <div class="food_dollar_qty">
                                    <p class="food_name">馬賽蝦汁海鮮清湯</p>
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
                    </div>
                </div>


                {/* 揪團結帳 */}
                <div class="food_order_group d-flex flex-column">
                    <div class="d-flex justify-content-center">
                        <a href="#"><img src="./img/people_plus@3x.png" style="width: 25px; height: 20px; margin-right: 5px;" /></a>
                        <button class="group_button oval" data-toggle="modal" data-target="#order_group_modal">揪團</button>
                    </div>
                    <div class="d-flex justify-content-center">
                        <button id="checkout" onclick="btncheckout()">去結帳</button>
                    </div>
                </div>


                {/* 揪團開啟確認modal */}
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
                </div>

                {/* 置頂鈕 */}
                <button type="button" id="btn_back_to_top" onclick="topfunction()" title="Go to top">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Orderpage;