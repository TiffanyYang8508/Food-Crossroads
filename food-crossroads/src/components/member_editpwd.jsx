import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/member.css";
import "../css/style.css";
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
            break;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <React.Fragment>
        <header className="header_page">
          <Header />
        </header>

        <aside class="aside_menu">
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
                  <a href={`/bookingmanagement/`}>訂位管理</a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href={`/ordermanagement/`}>訂餐管理</a>
                </h4>
              </div>
            </div>
          </div>
        </aside>

        <input type="checkbox" name="aside_menu_chk" id="aside_menu_chk" />
        <div class="mobile_aside_menu">
          <div class="panel-group" id="accordion">
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href="member.html">會員資料</a>
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

        <section id="edit_member">
          <div class="container-fluid member_div">
            <div class="row">
              <div class="col-md-12">
                <form>
                  <div>
                    <p class="title_member_edit">會員密碼修改</p>
                  </div>

                  <div class="form-group form-inline">
                    <label for="pwd" class="edit_label">
                      輸入原密碼:
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="pwd"
                      value={this.state.member.user_pwd}
                      onChange={this.pwdChange}
                      name="pwd"
                      required
                    />
                    <div class="invalid-feedback">輸入新密碼</div>
                  </div>
                  <div class="form-group form-inline">
                    <label for="confirmpwd" class="edit_label">
                      輸入新密碼
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmpwd"
                      value={this.state.member.user_npwd}
                      onChange={this.npwdChange}
                      name="confirmpwd"
                      required
                    />
                  </div>
                  <div class="form-group form-inline">
                    <label for="confirmpwd" class="edit_label">
                      確認新密碼
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="confirmpwd"
                      value={this.state.member.user_npwd_confirm}
                      onChange={this.npwdChange_confirm}
                      name="confirmpwd"
                      required
                    />
                  </div>
                  <div class="edit_btn_div">
                    <button
                      type="button"
                      onclick="confirm()"
                      class="member_back_btn"
                    >
                      返回
                    </button>
                    <button
                      type="button"
                      onClick={this.okButtonClick}
                      class="member_editinfo_btn"
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
