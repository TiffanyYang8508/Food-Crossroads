import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/login.css";

class Member_register_success extends Component {
  state = {};

  componentDidMount() {
    setTimeout(() => {
      window.location = "/member/login";
    }, 1500);
  }

  render() {
    return (
      <React.Fragment>
        <header className="header_page">
          <Header />
        </header>

        <section id="success_section">
          <div className="container-fluid success_div">
            <div className="row">
              <div className="col-12">
                <div className="member_success">
                  <div className="member_success_div">
                    <h2>註冊成功</h2>
                    <p>自動跳轉回原頁面...</p>
                  </div>
                </div>
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

export default Member_register_success;
