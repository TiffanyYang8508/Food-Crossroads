import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/member.css";

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
          <Header />
        </header>

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
                  <a href={`/bookingmanagement/${this.props.match.params.id}`}>
                    訂位管理
                  </a>
                </h4>
              </div>
            </div>
            <div class="panel panel-default">
              <div class="panel-heading">
                <h4 class="panel-title">
                  <a href={`/ordermanagement/${this.props.match.params.id}`}>
                    訂餐管理
                  </a>
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
                    <p class="title_member">會員資料</p>
                  </div>
                  <div class="editmember_info">
                    <div class="form-group form-inline">
                      <label htmlFor="email" className="form_text">
                        信　箱:
                      </label>
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
                      <label htmlFor="pwd" className="form_text">
                        密　碼:
                      </label>
                      <input
                        type="password"
                        class="form-control "
                        id="pwd"
                        value={this.state.Member.user_pwd}
                        name="pwd"
                        disabled
                      />
                    </div>
                    <div class="form-group form-inline">
                      <label htmlFor="name" className="form_text">
                        姓　名:
                      </label>
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
                      <label htmlFor="tel" className="form_text">
                        手　機:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="tel"
                        value={this.state.Member.user_tel}
                        name="tel"
                        disabled
                      />
                    </div>
                  </div>

                  <div class="btn_div">
                    <a href={`/editmemberpwd/1`} class="member_editpwd_btn">
                      修改密碼
                    </a>
                    <a href={`/editmember/1`} class="member_editinfo_btn">
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
