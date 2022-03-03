import React, { Component } from "react";
import logo from "../img/logo.png";
import Footer from "./footer";
import "../css/member_memberinfo.css";

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

        <aside className="aside_menu">
          <div className="panel-group" id="accordion">
            <div className="panel panel-default default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href="#">會員資料</a>
                </h4>
              </div>
            </div>
            <div className="panel panel-default ">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a href={`/bookingmanagement/${this.props.match.params.id}`}>
                    訂位管理
                  </a>
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
                  <a href="member.html">會員資料</a>
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
          <label for="aside_menu_chk" className="aside_menu_chk">
            <i className="fas fa-angle-right"></i>
          </label>
        </div>

        <section id="member_section">
          <div className="container-fluid member_div">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div>
                    <p className="title_member">會員資料</p>
                  </div>
                  <div className="editmember_info">
                    <div className="form-group form-inline">
                      <label htmlFor="email" className="form_text">
                        信　箱:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={this.state.Member.user_email}
                        name="email"
                        disabled
                      />
                    </div>
                    <div className="form-group form-inline">
                      <label htmlFor="pwd" className="form_text">
                        密　碼:
                      </label>
                      <input
                        type="password"
                        className="form-control "
                        id="pwd"
                        value={this.state.Member.user_pwd}
                        name="pwd"
                        disabled
                      />
                    </div>
                    <div className="form-group form-inline">
                      <label htmlFor="name" className="form_text">
                        姓　名:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={this.state.Member.user_name}
                        name="name"
                        disabled
                      />
                    </div>
                    <div className="form-group form-inline">
                      <label htmlFor="tel" className="form_text">
                        手　機:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="tel"
                        value={this.state.Member.user_tel}
                        name="tel"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="btn_div">
                    <a href={`/editmemberpwd/1`} className="member_editpwd_btn">
                      修改密碼
                    </a>
                    <a href={`/editmember/1`} className="member_editinfo_btn">
                      修改資料
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer_page">
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default Member;
