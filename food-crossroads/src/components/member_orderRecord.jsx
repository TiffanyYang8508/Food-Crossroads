import React, { Component } from "react";
import Axios from "axios";
import Header from "./header";
import Footer from "./footer";
import "../css/member.css";
import "../css/style.css";

class OrderRecord extends Component {
  state = {
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
    var result = await Axios.get("http://localhost:8000/ordermanagement/list");
    //console.log(result);
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

        <aside class="aside_menu">
          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href={`/member/1`}>會員資料</a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href={`/bookingmanagement/`}>訂位管理</a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default">
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

        <div id="order_manage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th>取餐日期</th>
                      <th>訂餐餐廳</th>
                      <th>訂餐菜名</th>
                      <th>訂餐時間</th>
                      <th>訂餐金額</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.List.map((item, index) => (
                      <tr key={index}>
                        <td className="mobile_td">{item.selfpick_date}</td>
                        <td className="mobile_td">{item.restaurant_name}</td>
                        <td className="mobile_td">{item.food_name}</td>
                        <td className="mobile_td">{item.order_date}</td>
                        <td className="mobile_td">{item.total_amount}</td>
                        <td className="order_td">
                          <button
                            className="detail_btn"
                            data-toggle="modal"
                            data-target="#detailModal"
                          >
                            詳細訂單
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

        <div class="modal fade" id="detailModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">詳細內容</h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                ></button>
              </div>

              <div class="detail_modal_body">
                姓名：李曉明 <br />
                手機：0900-xxxxxx <br />
                電子郵件：email@gmail.com <br />
                <br />
                訂餐編號：00001 <br />
                訂餐餐廳：餐廳名稱 <br />
                取餐時間：17:30 <br />
                訂餐金額：300 <br />
                備註：不要加茄子
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-lg btn-secondary"
                  data-dismiss="modal"
                >
                  返回
                </button>
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

export default OrderRecord;
