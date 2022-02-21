import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import "../css/member.css";
import "../css/style.css";

class BookingRecord extends Component {
  state = {
    List: [
      {
        booking_date: "2022-01-08",
        restaurant_name: "水相餐廳",
        user_name: "李曉明",
        booking_time: "2022-01-08",
        booking_peoplenumber: 3,
      },
    ],
  };

  async componentDidMount() {
    var result = await Axios.get(
      "http://localhost:8000/bookingmanagement/list"
    );
    this.state.List = result.data;
    console.log(result.data);
    this.setState({});
  }

  render() {
    return (
      <React.Fragment>
        <header className="header_page">
          <Header />
        </header>

        <aside className="aside_menu">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="booking_manage.html">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="order_manage.html">訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
        </aside>

        <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
        <div className="mobile_aside_menu">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="booking_manage.html">訂位管理</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="order_manage.html">訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
          <label for="aside_menu_chk">
            <i className="fas fa-angle-right"></i>
          </label>
        </div>

        <div id="booking_manage">
          <div className="container-fluid table_container">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
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
                      <tr>
                        <td className="mobile_td">{item.user_name}</td>
                        <td className="mobile_td">{item.restaurant_name}</td>
                        <td className="mobile_td">{item.booking_date}</td>
                        <td className="mobile_td">{item.booking_time}</td>
                        <td className="mobile_td">
                          {item.booking_peoplenumber}
                        </td>
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
                          <button className="comment_btn">評價</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="cancel_order_Modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">取消訂位</h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                ></button>
              </div>

              <div className="cancel_modal_body">確定取消此次訂位嗎?</div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="modal_ok_btn"
                  data-dismiss="modal"
                >
                  確定
                </button>
                <button
                  type="button"
                  className="modal_back_btn"
                  data-dismiss="modal"
                >
                  返回
                </button>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default BookingRecord;
