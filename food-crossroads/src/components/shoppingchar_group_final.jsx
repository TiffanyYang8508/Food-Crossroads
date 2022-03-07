import React, { Component } from "react";
import { Link } from "react-router-dom";
import Headeredit from "./header copy";
import Footer from "./footer";
import "../css/shoppingchar.css";
import Order_picture from "../img/aqua/aqua_img.jpg";
import $ from "jquery";
import "../fontawesome-free-5.15.4-web/css/all.css";


class Shoppingchar_group_final extends Component {
  state = {
    shoppingcharItem: { food_name: "", food_amount: "" },
  };

  async componentDidMount() {
    var url = `http://localhost:8000/shoppingchar`;
    // await
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
      flushSumPrice();
    })

    $(".single_checkbox").change(function () {
      if ($(`input[name='${this.name}']`.length ==
        $(`input[name='${this.name}']:checked`).length)) {
        $(".checkall").prop("checked", true);
      } else {
        $(".checkall").prop("checked", false);
      }
      flushSumPrice();
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
    $(".delete-shopping").on("click", function () {
      $(".delete_comfirm").show();
    });

    $('.delete_comfirm_check_btn').on("click", function () {
      $(".delete_comfirm").hide();
      $('#i-want-delete').parent('.shopping-row').remove();
      flushSumPrice();
    })

    $('.delete_comfirm_back_btn').on("click", function () {
      $(".delete_comfirm").hide();
    })

    //刪除確認





    //數量增減
    $(".increment").click(function () {
      var num = $(this).siblings(".itxt").val();
      num++;
      var that = this;
      flushSum(that, num);
      flushSumPrice();
    })
    $(".decrement").click(function () {
      var num = $(this).siblings(".itxt").val();
      if (num > 1) {
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
      price = parseFloat(price.substr(1));
      //獲得商品小計
      var sum = num * price;
      // console.log(num);
      // console.log(price);
      // console.log(sum);
      //重新整理商品小計
      $(that).parents(".p-num").siblings(".p-sum ").text('$' + sum.toFixed(0));
    }

    //重新整理總價
    function flushSumPrice() {
      //總件數
      var count = 0;
      //總價錢
      var money = 0;

      //重新整理總數量

      $(".itxt").each(function (i, e) {
        //如果勾選上了
        if ($(this).parents(".shopping-row").find(".shopping-checkbox").prop("checked") == true) {
          //累加
          count += parseInt($(e).val());
        }
      })
      $(".amount-sum").text('(' + count + '個商品)');

      $(".p-sum").each(function (i, e) {
        //如果勾選上了
        if ($(this).parents(".shopping-row").find(".shopping-checkbox").prop("checked") == true) {
          //累加
          money += parseFloat($(e).text().substr(1));
        }
      })
      //重新整理總價錢
      $(".price-sum ").text('總金額:$' + money);
      // console.log(money);
      // console.log(count);
    }


  }




  render() {
    return (
      <React.Fragment>
        <Headeredit />
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
                        <th colSpan="3">商品</th>
                        <th>單價</th>
                        <th>數量</th>
                        <th>總計</th>
                        <th>刪除</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="tr_title">
                        <td colspan="7">
                          <h5>aqua水相餐廳</h5>
                        </td>
                      </tr>
                      {/* <!-- 購物車品項 --> */}

                      <tr className="shopping-row" id="shopping-row">
                        <td>
                          <input class="shopping-checkbox checkmark single_checkbox" id="shopping-checkbox" type="checkbox"
                            name="shopping-checkbox" />
                        </td>
                        <td className="wrapper">
                          <img src={Order_picture} className="img-fluid img-thumbnail" alt="" />
                        </td>
                        <td>
                          <span id="ordername" className="ordername">西西里海鹽柴魚脆薯</span>
                        </td>
                        <td className="p-price">
                          <span className="price">$376</span>
                        </td>
                        <td className="p-num">

                          <span className="qty-squre ">
                            <input id="qtyminus" type="button" value="-" className="qty-btn decrement" />
                            <input type="text" value='2' className="qty itxt" name="quantity" />
                            <input id="qtyplus" type="button" value="+" className="qty-btn increment" />
                          </span>
                        </td>
                        <td className=" p-sum">
                          <span id="sum">$188</span>
                        </td>
                        <td class="delete-shopping">
                          <div>
                            <span><i className="fas fa-trash"></i></span>
                          </div>
                        </td>
                      </tr>

                      <tr class="shopping-row" id="shopping-row">
                        <td>
                          <input class="shopping-checkbox checkmark single_checkbox" id="shopping-checkbox" type="checkbox"
                            name="shopping-checkbox" />
                        </td>
                        <td class="wrapper">
                          <img src={Order_picture} class="img-fluid img-thumbnail" alt="" />
                        </td>
                        <td>
                          <span id="ordername" class="ordername">番茄羅勒起司搭頂級陳年油醋</span>
                        </td>
                        <td class="p-price">
                          <span class="price">$188</span>
                        </td>
                        <td class="p-num">

                          <span class="qty-squre ">
                            <input id="qtyminus" type="button" value="-" class="qty-btn decrement" />
                            <input type="text" value='2' class="qty itxt" name="quantity" />
                            <input id="qtyplus" type="button" value="+" class="qty-btn increment" />
                          </span>
                        </td>
                        <td class=" p-sum">
                          <span id="sum">$376</span>
                        </td>
                        <td class="delete-shopping">
                          <div>
                            <span><i className="fas fa-trash"></i></span>
                          </div>
                        </td>
                      </tr>

                      <tr class="shopping-row" id="shopping-row">
                        <td>
                          <input class="shopping-checkbox checkmark single_checkbox" id="shopping-checkbox" type="checkbox"
                            name="shopping-checkbox" />
                        </td>
                        <td class="wrapper">
                          <img src={Order_picture} class="img-fluid img-thumbnail" alt="" />
                        </td>
                        <td>
                          <span id="ordername" class="ordername">田園香澄鮮蝦蘿蔓鮮蔬</span>
                        </td>
                        <td class="p-price">
                          <span class="price">$318</span>
                        </td>
                        <td class="p-num">

                          <span class="qty-squre ">
                            <input id="qtyminus" type="button" value="-" class="qty-btn decrement" />
                            <input type="text" value='1' class="qty itxt" name="quantity" />
                            <input id="qtyplus" type="button" value="+" class="qty-btn increment" />
                          </span>
                        </td>
                        <td class=" p-sum">
                          <span id="sum">$318</span>
                        </td>
                        <td class="delete-shopping" id="i-want-delete">
                          <div>
                            <span><i className="fas fa-trash"></i></span>
                          </div>
                        </td>
                      </tr>
                      <tr class="shopping-row" id="shopping-row">
                        <td>
                          <input class="shopping-checkbox checkmark single_checkbox" id="shopping-checkbox" type="checkbox"
                            name="shopping-checkbox" />
                        </td>
                        <td class="wrapper">
                          <img src={Order_picture} class="img-fluid img-thumbnail" alt="" />
                        </td>
                        <td>
                          <span id="ordername" class="ordername">南義炸起司條</span>
                        </td>
                        <td class="p-price">
                          <span class="price">$288</span>
                        </td>
                        <td class="p-num">

                          <span class="qty-squre ">
                            <input id="qtyminus" type="button" value="-" class="qty-btn decrement" />
                            <input type="text" value='1' class="qty itxt" name="quantity" />
                            <input id="qtyplus" type="button" value="+" class="qty-btn increment" />
                          </span>
                        </td>
                        <td class=" p-sum">
                          <span id="sum">$288</span>
                        </td>
                        <td class="delete-shopping" id="i-want-delete">
                          <div>
                            <span><i className="fas fa-trash"></i></span>
                          </div>
                        </td>
                      </tr>
                      <tr class="shopping-row" id="shopping-row">
                        <td>
                          <input class="shopping-checkbox checkmark single_checkbox" id="shopping-checkbox" type="checkbox"
                            name="shopping-checkbox" />
                        </td>
                        <td class="wrapper">
                          <img src={Order_picture} class="img-fluid img-thumbnail" alt="" />
                        </td>
                        <td>
                          <span id="ordername" class="ordername">水相主廚私房湯品</span>
                        </td>
                        <td class="p-price">
                          <span class="price">$288</span>
                        </td>
                        <td class="p-num">

                          <span class="qty-squre ">
                            <input id="qtyminus" type="button" value="-" class="qty-btn decrement" />
                            <input type="text" value='1' class="qty itxt" name="quantity" />
                            <input id="qtyplus" type="button" value="+" class="qty-btn increment" />
                          </span>
                        </td>
                        <td class=" p-sum">
                          <span id="sum">$288</span>
                        </td>
                        <td class="delete-shopping" id="i-want-delete">
                          <div>
                            <span><i className="fas fa-trash"></i></span>
                          </div>
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
                            <span className="mobile_span ">總額:$188</span>
                          </div>
                          <td class="delete-shopping">
                            <div>
                              <span><i className="fas fa-trash"></i></span>
                            </div>
                          </td>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="all-squre" id="all-squre">
                  <label className="media">
                    <input id="shopping-checkbox" className="shopping-checkbox checkmark checkall" name="shopping-allcheckbox"
                      type="checkbox" />
                    <span className="media-body">全選</span>
                  </label>
                  <p>
                    <b class='price-sum'>總金額:$1,646</b><br />
                    <b><span class="amount-sum">(7個商品)</span></b>
                  </p>
                  <Link to="./shoppingok_group_final">
                    <button className="buy-btn">
                      <b>結帳</b>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>



        </div >

        <div id="mobile_shopping">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="mobile_shopping_div">
                  <input
                    className="shopping-checkbox checkmark"
                    id="shopping-checkbox"
                    type="checkbox"
                    name="shopping-checkbox"
                  />
                  <div className="mobile_shopping_img">
                    <img
                      src="img/image_shoppingchar/imge01.jpeg"
                      className="img-fluid img-thumbnail"
                      alt=""
                    />
                  </div>
                  <div className="mobile_shopping_text">
                    <span className="mobile_span">餐點名</span>
                    <span className="mobile_span">$123</span>
                    <span className="qty-squre">
                      <input
                        id="qtyminus"
                        type="button"
                        value="-"
                        className="qty-btn"
                      />
                      <input
                        type="text"
                        value="1"
                        className="qty"
                        name="quantity"
                      />
                      <input
                        id="qtyplus"
                        type="button"
                        value="+"
                        className="qty-btn"
                      />
                    </span>
                    <span className="mobile_span">總額:$1234</span>
                  </div>
                  <div className="mobile_delete">
                    <button>刪除</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 確定刪除modal */}
        <div class="modal delete_comfirm " id="delete_comfirm">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">確定刪除此餐點嗎?</h4>
            </div>
            <div class="modal-body ">
              <button type="button" class="delete_comfirm_back_btn">取消</button>
              <button type="button" class="delete_comfirm_check_btn">確定</button>
            </div >
          </div>
        </div>

        {/* <div className="all-squre" id="all-squre">
          <label className="media">
            <input
              id="shopping-checkbox"
              className="shopping-checkbox checkmark"
              name="shopping-allcheckbox"
              type="checkbox"
            />
            <span className="media-body">全選</span>
          </label>
          <p>
            <b>總金額(3個商品)$1234</b>
          </p>
          <button className="buy-btn">
            <b>結帳</b>
          </button>
        </div> */}




        <footer className="footer_page">
          <Footer />
        </footer>
      </React.Fragment >
    );
  }
}

export default Shoppingchar_group_final;
