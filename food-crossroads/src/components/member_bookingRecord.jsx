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
        booking_date: "2022-01-08",
        restaurant_name: "水相餐廳",
        user_name: "李曉明",
        booking_time: "2022-01-08",
        booking_peoplenumber: 3,
        booking_id: 1,
        id: 1,
        booking_service: "需要嬰兒座椅",
        user_email: "asdf@gmail.com",
      },
    ],
  };

  async componentDidMount() {
    console.log(this.props.match.params.id);
    var url =
      "http://localhost:8000/bookingmanagement/list/" +
      this.props.match.params.id;
    var result = await Axios.get(url);
    this.state.List = result.data;
    console.log(result.data);
    this.setState({});

    $(".detail_btn").on("click", function () {
      $(".modal-detail").css("display", "block");
    });

    $(".btn_close").on("click", function () {
      $(".modal-detail").css("display", "none");
    });

    $(".comment_btn").on("click", function () {
      $(".modal-comment").css("display", "block");
    });

    $(".btn_close").on("click", function () {
      $(".modal-comment").css("display", "none");
    });
  }

  render() {
    return (
      <React.Fragment>
        <header className="header_page">
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

        <aside id="member_aside">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href={`/member/${this.props.match.params.id}`}>會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href={`/ordermanagement/${this.props.match.params.id}`}>
                    訂餐管理
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </aside>

        <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
        <div id="mobile_member_aside">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href={`/member/${this.props.match.params.id}`}>會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href={`/ordermanagement/${this.props.match.params.id}`}>
                    訂餐管理
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <label htmlFor="aside_menu_chk" className="aside_menu_chk">
            <i className="fas fa-angle-right"></i>
          </label>
        </div>

        <div id="booking_manage">
          <div className="container-fluid table_container">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead className="table_title">
                    <tr>
                      <th>訂位人</th>
                      <th>訂位餐廳</th>
                      <th>訂位日期</th>
                      <th>訂位時間</th>
                      <th>訂位人數</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((item, index) => (
                      <tr key={index}>
                        <td className="mobile_td">{item.user_name}</td>
                        <td className="mobile_td">{item.restaurant_name}</td>
                        <td className="mobile_td">2022/03/08</td>
                        <td className="mobile_td">{item.booking_time}</td>
                        <td className="mobile_td">
                          {item.booking_peoplenumber}
                        </td>
                        <td className="btn_td">
                          <a href={`/cancelbooking/${item.booking_id}`}>
                            <button className="cancel_btn">取消訂位</button>
                          </a>
                          <button className="detail_btn" id="detail_btn">
                            詳細內容
                          </button>
                          <div className="modal modal-detail" tabIndex="-1">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">詳細內容</h4>
                                </div>

                                <div className="detail_modal_body">
                                  姓名：{item.user_name} <br />
                                  手機：{item.user_tel}
                                  <br />
                                  電子郵件：{item.user_email} <br />
                                  <br />
                                  訂位人數：{item.booking_peoplenumber} <br />
                                  訂位日期：{item.booking_date} <br />
                                  取位時間：{item.booking_time}
                                  <br />
                                  備註：{item.booking_service}
                                </div>

                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn_close"
                                    data-dismiss="modal"
                                  >
                                    返回
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <button className="comment_btn">評價</button>
                          <div className="modal modal-comment" tabIndex="-1">
                            <div className="modal-dialog">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">
                                    您對這間餐廳的評價如何？
                                  </h4>
                                </div>
                                <div className="comment_modal">
                                  <p>給予評分：</p>
                                  <div className="comment_rate_wrapper">
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                  </div>
                                  <p></p>
                                  <div>
                                    <p>撰寫評論：</p>
                                    <textarea
                                      name="comment"
                                      id=""
                                      cols="30"
                                      rows="3"
                                    ></textarea>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn_close">
                                      返回
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                    <tr id="cancel">
                      <td className="mobile_td">李曉明</td>
                      <td className="mobile_td">一鷺串燒居酒屋</td>
                      <td className="mobile_td">2022/02/24</td>
                      <td className="mobile_td">18:00:00</td>
                      <td className="mobile_td">2</td>
                      <td className="btn_td">
                        <button
                          className="cancel_btn"
                          data-toggle="modal"
                          data-target="#cancel_order_Modal"
                        >
                          取消訂位
                        </button>
                        <button
                          className="detail_btn"
                          data-toggle="modal"
                          data-target="#detailModal"
                        >
                          詳細內容
                        </button>
                      </td>
                      <td>
                        <button
                          className="comment_btn"
                          data-toggle="modal"
                          data-target="#rankModal"
                        >
                          評價
                        </button>
                      </td>
                    </tr>
                    <tr id="cancel">
                      <td className="mobile_td">李曉明</td>
                      <td className="mobile_td">布列塔尼歐法鄉村雅廚</td>
                      <td className="mobile_td">2022/02/02</td>
                      <td className="mobile_td">20:00:00</td>
                      <td className="mobile_td">4</td>
                      <td className="btn_td">
                        <button
                          className="cancel_btn"
                          data-toggle="modal"
                          data-target="#cancel_order_Modal"
                        >
                          取消訂位
                        </button>
                        <button
                          className="detail_btn"
                          data-toggle="modal"
                          data-target="#detailModal"
                        >
                          詳細內容
                        </button>
                      </td>
                      <td>
                        <button
                          className="comment_btn"
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

        <div id="mobile_booking_manage">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="table mobile_order_div">
              <div class="mobile_order_inline_div">
                <div class="mobile_text_div">
                  <p>訂位人:李曉明</p>
                  <p>訂位日期:2022-01-08</p>
                  <p>訂位餐廳:aqua水相餐廳</p>
                  <p>訂位時間:17:00</p>
                  <p>訂位人數:3</p>
                  <div class="mobile_btn_div">
                    <button
                      class="cancel_btn"
                      data-toggle="modal"
                      data-target="#cancel_order_Modal"
                    >
                      取消訂位
                    </button>
                    <button
                      class="detail_btn"
                      data-toggle="modal"
                      data-target="#detailModal"
                    >
                      詳細內容
                    </button>
                    <button class="comment_btn">評價</button>
                  </div>
                </div>
              </div>
              <div class="mobile_order_inline_div">
                <div class="mobile_text_div">
                  <p>訂位人:李曉明</p>
                  <p>訂位日期:2022-01-08</p>
                  <p>訂位餐廳:aqua水相餐廳</p>
                  <p>訂位時間:17:00</p>
                  <p>訂位人數:2</p>
                </div>
                <div class="mobile_btn_div">
                  <button
                    class="cancel_btn"
                    data-toggle="modal"
                    data-target="#cancel_order_Modal"
                  >
                    取消訂位
                  </button>
                  <button
                    class="detail_btn"
                    data-toggle="modal"
                    data-target="#detailModal"
                  >
                    詳細內容
                  </button>
                  <button class="comment_btn">評價</button>
                </div>
              </div>
              <div class="mobile_order_inline_div">
                <div class="mobile_text_div">
                  <p>訂位人:李曉明</p>
                  <p>訂位日期:2022-01-08</p>
                  <p>訂位餐廳:aqua水相餐廳</p>
                  <p>訂位時間:17:00</p>
                  <p>訂位人數:4</p>
                </div>
                <div class="mobile_btn_div">
                  <button
                    class="cancel_btn"
                    data-toggle="modal"
                    data-target="#cancel_order_Modal"
                  >
                    取消訂位
                  </button>
                  <button
                    class="detail_btn"
                    data-toggle="modal"
                    data-target="#detailModal"
                  >
                    詳細內容
                  </button>
                  <button class="comment_btn">評價</button>
                </div>
              </div>
             
              
              </div>
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
