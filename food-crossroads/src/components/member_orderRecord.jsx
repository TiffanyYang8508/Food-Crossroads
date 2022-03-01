import React, { Component } from "react";
import Axios from "axios";
import logo from "../img/logo.png";
import Footer from "./footer";
import $ from "jquery";
import "../css/member.css";

class BookingRecord extends Component {
  state = {
    id: this.props.match.params.id,
    List: [
      {
        selfpick_date: "2022-01-08",
        restaurant_name: "水相餐廳",
        food_name: " 鴨胸",
        order_date: "2022-01-08",
        total_amount: "123",
      },
    ],
  };

  async componentDidMount() {
    console.log(this.props.match.params.id);
    var result = await Axios.get(
      `http://localhost:8000/ordermanagement/list/${this.props.match.params.id}`
    );
    //console.log(result);
    this.state.List = result.data;
    console.log(result.data);
    this.setState({});

    $(".detail_btn").on("click", function () {
      $(".modal-detail").css("display", "block");
    });

    $(".btn_close").on("click", function () {
      $(".modal-detail").css("display", "none");
    });
  }

  render() {
    return (
      <React.Fragment>
        <header id="header_page">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="LOGO" />
            </a>
            <div className="nav_icon">
              <a className="nav_a" href="/restaurant/list">
                <i className="fas fa-store"></i>餐廳列表
              </a>
              <a className="nav_a" href="/orderpage">
                <i className="fas fa-shopping-cart"></i>購物車
              </a>
              <a className="nav_a" href="/member/1">
                <i className="fas fa-user-circle"></i>李曉明
              </a>
            </div>
            <div className="rwd_icon">
              <a className="nav_a" href="/restaurant/list">
                <i className="fas fa-store"></i>
              </a>
              <a className="nav_a" href="/orderpage">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <a className="nav_a" href="/member/login">
                <i className="fas fa-user-circle"></i>
              </a>
            </div>
          </nav>
        </header>

        <aside class="aside_menu">
          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href={`/member/${this.props.match.params.id}`}>會員資料</a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default ">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href={`/bookingmanagement/${this.props.match.params.id}`}>
                    訂位管理
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href="#">訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
        </aside>

        <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
        <div class="mobile_aside_menu">
          <div class="panel-group" id="accordion">
            <div class="panel panel-default default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href="#">會員資料</a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href="booking_manage.html">訂位管理</a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href="order_manage.html">訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
          <label for="aside_menu_chk">
            <i class="fas fa-angle-right"></i>
          </label>
        </div>

        <div id="booking_manage">
          <div className="container-fluid table_container">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead className="table_title ">
                    <tr>
                      <th>取餐日期</th>
                      <th>訂餐餐廳</th>
                      <th>訂餐菜名</th>
                      <th>訂餐時間</th>
                      <th>訂餐金額</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((item, index) => (
                      <tr>
                        <td className="mobile_td">2022/03/08 </td>
                        <td className="mobile_td">{item.restaurant_name}</td>
                        <td className="mobile_td">{item.food_name}</td>
                        <td className="mobile_td">{item.order_date}</td>
                        <td className="mobile_td">{item.total_amount}</td>
                        <td className="order_td">
                          <button className="detail_btn">詳細訂單</button>
                        </td>
                        <div class="modal modal-detail" tabIndex="-1">
                          <div class="modal-dialog">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h4 class="modal-title">詳細內容</h4>
                              </div>

                              <div class="detail_modal">
                                姓名：{item.user_name} <br />
                                手機：{item.user_tel}
                                <br />
                                電子郵件：{item.user_email} <br />
                                <br />
                                訂餐餐點：{item.food_name} <br />
                                訂餐餐廳：{item.restaurant_name} <br />
                                取餐時間：{item.selfpick_date} <br />
                                訂餐金額：{item.total_amount}
                                <br />
                              </div>

                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn_close"
                                  data-dismiss="modal"
                                >
                                  返回
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <td>
                          <button className="order_comment_btn">評價</button>
                        </td>
                      </tr>
                    ))}
                    <tr id="cancel">
                      <td class="mobile_td">2022/02/24</td>
                      <td class="mobile_td">aqua水相餐廳</td>
                      <td class="mobile_td">厚切美國頂級PRIME翼板牛排</td>
                      <td class="mobile_td">18:00:00</td>
                      <td class="mobile_td">1198</td>
                      <td class="btn_td">
                        <button
                          class="detail_btn"
                          data-toggle="modal"
                          data-target="#detailModal"
                        >
                          詳細內容
                        </button>
                      </td>
                      <td>
                        <button
                          class="order_comment_btn"
                          data-toggle="modal"
                          data-target="#rankModal"
                        >
                          評價
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer_page">
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default BookingRecord;
