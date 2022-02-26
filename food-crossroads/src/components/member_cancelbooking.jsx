import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Axios from "axios";
// import "../css/style.css";
import "../css/member_cancelbooking.css";

class CancelBooking extends Component {
  state = {
    id: this.props.match.params.id,
    member: {
      user_name: "",
      user_email: "",
      user_tel: "",
    },
  };

  async componentDidMount() {
    var result = await Axios.get(
      `http://localhost:8000/detail/record/${this.props.match.params.id}`
    );
    this.state.member = result.data;
    console.log(result.data);
    this.setState({});
  }

  okbtnClick = async () => {
    console.log("ok");
    var result = await Axios.delete(
      `http://localhost:8000/cancelbooking/${this.props.match.params.id}`,
      this.state.member
    );
    console.log(result);
    //window.location = `/bookingmanagement${this.props.match.params.id}`;
  };

  render() {
    return (
      <React.Fragment>
        <header className="header_page">
          <Header />
        </header>

        <div id="membercancelbooking" className="cancel_container ">
          <div className="cancel_person">
            <div className="cancel_form_show">您確定要取消此訂位嗎？</div>
            <div className="form_container_cancel_wrapper">
              <form action="#">
                <div className="form_container_cancel_wrapper_left">
                  <div className="form_container_cancel">
                    <label for="cancel_person_name">姓　　名：</label>
                    <label for="cancel_person_name">
                      {this.state.member.user_name}
                    </label>
                  </div>
                  <div className="form_container_cancel">
                    <label for="cancel_person_cellphone">手　　機：</label>
                    <label for="cancel_person_cellphone">
                      {this.state.member.user_tel}
                    </label>
                  </div>
                  <div className="form_container_cancel">
                    <label for="cancel_person_email">信　　箱：</label>
                    <label for="cancel_person_email">
                      {this.state.member.user_email}
                    </label>
                  </div>
                </div>
                <div className="form_container_cancel_wrapper_right">
                  <div className="form_container_cancel">
                    <label for="cancel_person_person_number">訂位人數：</label>
                    <label for="cancel_person_person_number">
                      {this.state.member.booking_peoplenumber}
                    </label>
                  </div>
                  <div className="form_container_cancel">
                    <label for="cancel_person_date">訂位日期：</label>
                    <label for="cancel_person_date">
                      {this.state.member.booking_date}
                    </label>
                  </div>
                  <div className="form_container_cancel">
                    <label for="cancel_person_time">訂位時間：</label>
                    <label for="cancel_person_time">
                      {this.state.member.booking_time}
                    </label>
                  </div>
                  <div className="form_container_cancel">
                    <label for="cancel_person_demands">需　　求：</label>
                    <label for="cancel_person_demands">
                      {this.state.member.booking_service}
                    </label>
                  </div>
                  <div className="form_container_cancel">
                    <label for="cancel_person_remark">備　　註：</label>
                    <label for="cancel_person_remark">無</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="btn_container_cancel">
              <a href="">
                <input
                  type="button"
                  className="cancel_btn_manage"
                  value="返回"
                />
              </a>
              <a href="">
                <input
                  type="button"
                  className="cancel_btn_ok"
                  value="確定"
                  onClick={this.okbtnClick}
                />
              </a>
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

export default CancelBooking;
