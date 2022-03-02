import React, { Component } from "react";
import logo from "../img/logo.png";
import Footer from "./footer";
import "../css/member_editpwd.css";
import Axios from "axios";

class EditMemberpwd extends Component {
  state = {
    member: {
      user_pwd: "",
      user_npwd: "",
      user_npwd_confirm: "",
    },
  };

  pwdChange = (e) => {
    var newState = { ...this.state };
    newState.member.user_pwd = e.target.value;
    this.setState(newState);
  };

  npwdChange = (e) => {
    var newState = { ...this.state };
    newState.member.user_npwd = e.target.value;
    this.setState(newState);
  };

  npwdChange_confirm = (e) => {
    var newState = { ...this.state };
    newState.member.user_npwd_confirm = e.target.value;
    this.setState(newState);
  };

  okButtonClick = async () => {
    console.log("ok");
    await new Axios.put("http://localhost:8000/editpwd", this.state.member)
      .then((res) => {
        switch (res.data.status) {
          case "0":
            alert(res.data.err);
            break;
          case "1":
            alert(res.data.err);
            break;
          case "2":
            alert(res.data.err);
            window.location = `/member/${this.props.match.params.id}`;
            break;
          case "3":
            alert(res.data.err);
            break;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  BackButtonClick = async () => {
    window.location = "/member/1";
  };

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

        <aside id="member_aside">
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
          <label for="aside_menu_chk">
            <i className="fas fa-angle-right"></i>
          </label>
        </div>

        <section id="edit_pwd">
          <div class="container-fluid member_div">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div>
                    <p className="title_member_edit">會員密碼修改</p>
                  </div>

                  <div className="form-group form-inline">
                    <label for="pwd" className="edit_label">
                      輸入原密碼:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="pwd"
                      value={this.state.member.user_pwd}
                      onChange={this.pwdChange}
                      name="pwd"
                      required
                    />
                    <div className="invalid-feedback">輸入新密碼</div>
                  </div>
                  <div className="form-group form-inline">
                    <label for="confirmpwd" className="edit_label">
                      輸入新密碼
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmpwd"
                      value={this.state.member.user_npwd}
                      onChange={this.npwdChange}
                      name="confirmpwd"
                      required
                    />
                  </div>
                  <div className="form-group form-inline">
                    <label for="confirmpwd" className="edit_label">
                      確認新密碼
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmpwd"
                      value={this.state.member.user_npwd_confirm}
                      onChange={this.npwdChange_confirm}
                      name="confirmpwd"
                      required
                    />
                  </div>
                  <div className="edit_btn_div">
                    <button
                      type="button"
                      onClick={this.BackButtonClick}
                      className="member_back_btn"
                    >
                      返回
                    </button>
                    <button
                      type="button"
                      onClick={this.okButtonClick}
                      className="member_editinfo_btn"
                    >
                      確定修改
                    </button>
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

export default EditMemberpwd;
