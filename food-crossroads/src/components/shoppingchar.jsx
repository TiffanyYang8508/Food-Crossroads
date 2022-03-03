import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './header';
import Footer from './footer';
import "../css/shoppingchar.css";
import Order_picture from "../img/aqua/aqua_img.jpg";
import $ from "jquery";



class Shoppingchar extends Component {
    state = {
        shoppingcharItem: [{ name: "", price: "", amount: "" },
        ],
    }


    componentDidMount() {
        //勾勾
        $("input").prop("checked", true);
        $('input').change(function () {
            $(`input[name='${this.id}']`).prop('checked', this.checked);
            $(`input[id='${this.name}']`)
                .prop('checked',
                    $(`input[name='${this.name}']`).length ==
                    $(`input[name='${this.name}']:checked`).length)
        })
        // var getData = localStorage.getItem('cart');
        // var getDataAry = JSON.parse(getData);

        const getDataAry = JSON.parse(localStorage.getItem('cart')) || [];
        this.state.shoppingcharItem = getDataAry;
        console.log(getDataAry);
        console.log(this.state.shoppingcharItem);

        for (let i = 0; i < localStorage.length; i++) {
            console.log(localStorage.key(i) + '' + localStorage.getItem(localStorage.key(i)));
        }

        // console.log(cart);


        // console.log(typeof this.state.shoppingcharItem);
        // var getDate = localStorage.getItem('cart');
        // console.log(getDate);
        // console.log(typeof getDate)

        // var getData = localStorage.getItem('cart');
        // var getDataAry = JSON.parse(getData);
        // console.log(getDataAry);
        // console.log(typeof getDataAry)

        //刪除功能
        $(".delete-shopping").click(function () {
            $(this).parents(".shopping-row").remove();
        })


        //數量增減
        $(".increment").click(function () {
            //獲得輸入框的數量
            var num = $(this).siblings(".itxt").val();
            //加一
            num++;
            var that = this;
            flushSum(that, num);
            flushSumPrice();
        })
        $(".decrement").click(function () {
            //獲得輸入框的數量
            var num = $(this).siblings(".itxt").val();
            //如果數量大於一
            if (num > 1) {
                //減一
                num--;
            }
            var that = this;
            flushSum(that, num);
            flushSumPrice();
        })

        //重新整理小計
        function flushSum(that, num) {
            //重新整理商品數量
            $(that).siblings(".itxt").val(num);
            //獲得商品的價格
            var price = $(that).parents(".p-num").siblings(".p-price").text();
            //擷取字串並轉型
            price = parseFloat(price.substr(1));
            //獲得商品小計
            var sum = num * price;
            console.log(sum);
            //重新整理商品小計,商品小計保留兩位小數
            $(that).parents(".p-num").siblings(".p-sum span").text("$" + sum.toFixed(2));
        }

        //重新整理總價
        function flushSumPrice() {
            //總件數
            var count = 0;
            //總價錢
            var money = 0;

            //重新整理總數量
            $(".amount-sum").text(count);

            //遍歷價錢
            $(".p-sum").each(function (i, ele) {
                //如果勾選上了
                if ($(this).parents(".cart-item").find(".j-checkbox").prop("checked") == true) {
                    //累加
                    money += parseFloat($(ele).text().substr(1));
                }
            })
            //重新整理總價錢
            $(".price-sum ").text("$" + money.toFixed(2));
        }
    }







    render() {
        return (
            <React.Fragment>
                <Header />
                <div id='shoppingchar'>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html"><span>首頁</span></a></li>
                                        <li className="breadcrumb-item"><a href=""><span>餐廳列表</span></a></li>
                                        <li className="breadcrumb-item active" aria-current="page"><span>訂餐</span></li>
                                    </ul>
                                </nav>


                                <div id="shoppingchar">
                                    <table className="table shopping-table">
                                        <thead>
                                            <tr>
                                                <th colspan="3">商品</th>
                                                <th>單價</th>
                                                <th>數量</th>
                                                <th>總計</th>
                                                <th>刪除</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr className="tr_title">
                                                <td colspan="7">
                                                    <h5></h5>
                                                </td>
                                            </tr>
                                            {/* <!-- 購物車品項 --> */}

                                            <tr class="shopping-row" id="shopping-row">
                                                <td>
                                                    <input class="shopping-checkbox checkmark" id="shopping-checkbox" type="checkbox"
                                                        name="shopping-checkbox" />
                                                </td>
                                                <td class="wrapper">
                                                    <img src={Order_picture} class="img-fluid img-thumbnail" alt="" />
                                                </td>
                                                <td>
                                                    <span id="ordername" class="ordername">西西里海鹽柴魚脆薯</span>
                                                </td>
                                                <td class>
                                                    <span class="price">$188</span>
                                                </td>
                                                <td>

                                                    <span class="qty-squre p-num">
                                                        <input id="qtyminus" type="button" value="-" class="qty-btn decrement" />
                                                        <input type="text" value='1' class="qty itxt" name="quantity" />
                                                        <input id="qtyplus" type="button" value="+" class="qty-btn increment" />
                                                    </span>
                                                </td>
                                                <td class=" p-sum">
                                                    <span id="sum">$188</span>
                                                </td>
                                                <td class="delete-shopping">
                                                    <span>刪除</span>
                                                </td>
                                            </tr>
                                            <tr class="shopping-row" id="shopping-row">
                                                <td>
                                                    <input class="shopping-checkbox checkmark" id="shopping-checkbox" type="checkbox"
                                                        name="shopping-checkbox" />
                                                </td>
                                                <td class="wrapper">
                                                    <img src={Order_picture} class="img-fluid img-thumbnail" alt="" />
                                                </td>
                                                <td>
                                                    <span id="ordername" class="ordername">蕃茄羅勒起司搭頂級陳年油醋</span>
                                                </td>
                                                <td>
                                                    <span class="price">$188</span>
                                                </td>
                                                <td>

                                                    <span class="qty-squre">
                                                        <input id="qtyminus" type="button" value="-" class="qty-btn sub"
                                                            onclick="qty()" />
                                                        <input type="text" value='2' class="qty" name="quantity" />
                                                        <input id="qtyplus" type="button" value="+" class="qty-btn add" onclick="qty()" />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span id="sum">$376</span>
                                                </td>
                                                <td class="delete-shopping">
                                                    <span>刪除</span>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div id="mobile_shopping">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="mobile_shopping_div">
                                                    <input className="shopping-checkbox checkmark" id="shopping-checkbox" type="checkbox"
                                                        name="shopping-checkbox" />
                                                    <div className="mobile_shopping_img">
                                                        <img src="img/image_shoppingchar/imge01.jpeg" className="img-fluid img-thumbnail"
                                                            alt="" />
                                                    </div>
                                                    <div className="mobile_shopping_text">
                                                        <span className="mobile_span">餐點名</span>
                                                        <span className="mobile_span">$123</span>
                                                        <span className="qty-squre">
                                                            <input id="qtyminus" type="button" value="-" className="qty-btn" />
                                                            <input type="text" value="1" className="qty" name="quantity" />
                                                            <input id="qtyplus" type="button" value="+" className="qty-btn" />
                                                        </span>
                                                        <span className="mobile_span amount-sum">總額:$1234</span>
                                                    </div>
                                                    <div className="mobile_delete">
                                                        <button>刪除</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="all-squre" id="all-squre">
                                    <label className="media">
                                        <input id="shopping-checkbox" className="shopping-checkbox checkmark" name="shopping-allcheckbox"
                                            type="checkbox" />
                                        <span className="media-body">全選</span>
                                    </label>
                                    <p>
                                        <b>總金額(3個商品)$1234</b>
                                    </p>
                                    <Link to="./shoppingok">
                                        <button className="buy-btn">
                                            <b>結帳</b>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </React.Fragment >
        );

    }
}

export default Shoppingchar;