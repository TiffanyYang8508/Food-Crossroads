import React, { Component } from "react";
import "../css/member.css";
import "../css/style.css";

import Axios from "axios";

class Member extends Component {
  state = {
    Member: [
      {
        user_email: "email@gmail.com",
        user_pwd: "12345",
        user_name: "李曉明",
        user_tel: "0900123456",
      },
    ],
  };

  async componentDidMount() {
    var url = `http://localhost:8000/member/list/${this.props.match.params.id}`;
    var result = await Axios.get(url);
    this.state.Member = result.data;
    console.log(result);
    this.setState({});
  }

  render() {
    return (
      <React.Fragment>
        <div class="header_page">
          <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="index.html">
                <img src={require("../img/logo.png")} alt="LOGO" />
              </a>
              <div class="nav_icon">
                <a class="nav_a" href="list.html">
                  <i class="fas fa-store"></i>餐廳列表
                </a>
                <a class="nav_a" href="shoppingchar.html">
                  <i class="fas fa-shopping-cart"></i>購物車
                </a>
                <a class="nav_a" href="member_login.html">
                  <i class="fas fa-user-circle"></i>會員登入
                </a>
              </div>
              <div class="rwd_icon">
                <a class="nav_a" href="list.html">
                  <i class="fas fa-store"></i>
                </a>
                <a class="nav_a" href="shoppingchar.html">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a class="nav_a" href="member_login.html">
                  <i class="fas fa-user-circle"></i>
                </a>
              </div>
            </nav>
          </header>
        </div>

        <aside class="aside_menu">
          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href="#">會員資料</a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default ">
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
        </aside>

        <section id="member_section">
          <div class="container-fluid member_div">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div>
                    <p class="title_member_edit">會員資料</p>
                  </div>
                  <div class="form-group form-inline">
                    <label for="email">信　箱:</label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={this.state.Member.user_email}
                      name="email"
                      disabled
                    />
                  </div>
                  <div class="form-group form-inline">
                    <label for="pwd">密　碼:</label>
                    <input
                      type="password"
                      class="form-control"
                      id="pwd"
                      value={this.state.Member.user_pwd}
                      name="pwd"
                      disabled
                    />
                  </div>
                  <div class="form-group form-inline">
                    <label for="name">姓　名:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      value={this.state.Member.user_name}
                      name="name"
                      disabled
                    />
                  </div>

                  <div class="form-group form-inline">
                    <label for="tel">手　機:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="tel"
                      value={this.state.Member.user_tel}
                      name="tel"
                      disabled
                    />
                  </div>
                  <div class="btn_div">
                    <button onclick="edit()" class="member_confirm_btn">
                      修改資料
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <div class="footer_page">
          <footer>
            <div class="footer_link">
              <a href="#">關於我們</a>
              <a href="#">商家入口</a>
              <a href="#">常見問題</a>
              <a href="#">聯絡我們</a>
            </div>
            <div class="footer_text">
              <p>Copyright &copy; 2022 FoodCrossesRoads.All Rights Reserved.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default Member;
