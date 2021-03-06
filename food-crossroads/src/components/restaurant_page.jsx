import React, { Component } from "react";
import Footer from "./footer";
import $ from "jquery";
import logo from "../img/logo.png";
import "../css/restaurant_page.css";
import Carousel from "react-bootstrap/Carousel";
import StarIconNo from "../img/star.png";
import StarIconFill from "../img/star-fill.png";
import Axios from "axios";

class Restaurant_page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickIndex: 0,
      hoverIndex: 0,
      memberinfo:{},
    };
    this.getStar = this.getStar.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleOnMouseOut = this.handleOnMouseOut.bind(this);
    this.changeMarkingScore = this.changeMarkingScore.bind(this);
  }

  handleClick(index) {
    this.setState({
      clickIndex: index,
    });
    this.changeMarkingScore(index);
  }

  handleOnMouseEnter(index) {
    this.setState({
      hoverIndex: index,
    });
  }

  handleOnMouseOut() {
    this.setState({
      hoverIndex: 0,
    });
  }

  changeMarkingScore(index) {
    let item = {
      'module': this.props.data,
      'score': index,
    };
    this.props.changeMarkingScore(item);
  }

  getStar() {
    let num = this.state.hoverIndex === 0 ? this.state.clickIndex : this.state.hoverIndex;
    let starContainer = [];
    const arr = [1, 2, 3, 4, 5];
    arr.map((ele, index) => {
      starContainer.push(
        <span
          key={index}
          className="starIcon"
          onClick={this.handleClick.bind(this, ele)}
          onMouseEnter={this.handleOnMouseEnter.bind(this, ele)}
          onMouseOut={this.handleOnMouseOut.bind(this, ele)}
        >
          {ele > num ? <img src={StarIconNo} /> : <img src={StarIconFill} />}
        </span>
      );
    });
    return starContainer;
  }
  
  async componentDidMount() {
    var r = await new Axios.get("http://localhost:8000/memberinfo");
    var newState = {...this.state.memberinfo};
    newState.memberinfo = r.data[0];
    this.setState(newState);


    // ????????????:?????????????????????

    $(".on_top_btn").on("click", function () {
      $("html,body").animate({ scrollTop: 0 }, 300);
    });

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 300) {
        $(".on_top_btn").fadeIn(100);
      } else {
        $(".on_top_btn").stop().fadeOut(100);
      }
    });

    $(".reservation_btn").on("click", function () {
      $("#to_register_member").css("display", "block");
    });

    $(".order_btn").on("click", function () {
      $("#to_register_member").css("display", "block");
    });

    $(".display_top_right").on("click", function () {
      $("#to_register_member").css("display", "none");
    });

    $(".to_member_register").on("click", function () {
      $(window.location).prop("href", "/register");
    });

    $(".to_member_login").on("click", function () {
      $(window.location).prop("href", "/member/login");
    });

    $(".cuisine_name").on("click", function () {
      $(window.location).prop("href", "/restaurant/list");
    });

    $(".shop_menu").on("click", function () {
      $("#menu").css("display", "block");
    });

    $(".modal_menu").on("click", function () {
      $("#menu").css("display", "none");
    });

    $(".add_comment").on("click", function () {
      $(".modal-comment").css("display", "block");
    });

    $(".btn_close").on("click", function () {
      $(".modal-comment").css("display", "none");
    });

    $(".btn_add").on("click", function() {
      $(".comment_item:nth-child(1)").css("display", "block");
      $(".modal-comment").css("display", "none");
    })

  }

  render() {
    let starItems = this.getStar();
    return (
      <React.Fragment>
        <header className="header_page">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
            <img src={logo} alt="LOGO" />
            </a>
            <div className="nav_icon">
            <a className="nav_a" href="/restaurant/list">
              <i className="fas fa-store"></i>????????????
            </a>
            <a className="nav_a" href="/orderpage">
              <i className="fas fa-shopping-cart"></i>?????????
            </a>
            <a className="nav_a" href="/member/1">
              <i className="fas fa-user-circle"></i>{this.state.memberinfo.user_name}
            </a>
            </div>
            <div className="rwd_icon">
            <a className="nav_a" href="/restaurant/list">
              <i className="fas fa-store"></i>
            </a>
            <a className="nav_a" href="/orderpage">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a className="nav_a" href="/member/:id">
              <i className="fas fa-user-circle"></i>
            </a>
            </div>
          </nav>
        </header>
        <section id="restaurant_page">
          <div className="container">
            <div className="row">
              <div className="btn_container">
                <button
                  id="reservation"
                  className="reservation_btn"
                  data-bs-toggle="modal"
                >
                  ????????????
                </button>
                <button id="order" className="order_btn">
                  ????????????
                </button>
              </div>
              <div id="to_register_member" className="modal">
                <div className="modal_content">
                  <div className="container_alert">
                    <div
                      className="button display_top_right"
                    >
                      &times;
                    </div>
                    <br />
                    <br />
                    <h2>?????????????????? ????????????</h2>
                    <p>????????????????????????????????????????????????</p>
                    <br />
                    <button className="to_member_login">??????</button>
                    <button className="to_member_register">??????</button>
                  </div>
                </div>
              </div>
              <div>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">??????</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/restaurant/list">????????????</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      aqua ????????????
                    </li>
                  </ul>
                </nav>
              </div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-60"
                    src="../img/aqua/aqua_1.jpg"
                    alt="aqua_1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-60"
                    src="../img/aqua/aqua_2.jpg"
                    alt="aqua_2"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-60"
                    src="../img/aqua/aqua_3.jpg"
                    alt="aqua_3"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="shop_container">
              <div className="shop_wrapper" id="information">
                <h2 className="shop_title flex1">
                  <button className="cuisine_name">????????????</button>
                </h2>
                <div className="top_flex">
                  <h4 className="shop_title flex4">Aqua Tea ????????????</h4>
                  <button className="shop_menu" id="menu_btn">
                    ??????
                  </button>
                </div>
                <div id="menu" className="modal_menu">
                  <div className="modal_content_menu">
                    <div className="container_menu" id="menu_content">
                      <div className="button display_top_right display_top_right_menu">
                        &times;
                      </div>
                      <br />
                      <br />
                      <img
                        src={require("../img/aqua/menu1.jpg")}
                        alt="aqua??????"
                      />
                      <img
                        src={require("../img/aqua/menu2.jpg")}
                        alt="aqua??????"
                      />
                      <img
                        src={require("../img/aqua/menu3.jpg")}
                        alt="aqua??????"
                      />
                      <img
                        src={require("../img/aqua/menu4.jpg")}
                        alt="aqua??????"
                      />
                    </div>
                  </div>
                </div>
                <div className="top_flex">
                  <div className="shop_rate_wrapper">
                    <img src={require("../img/star-fill.png")} alt="star-fill" />
                    <img src={require("../img/star-fill.png")} alt="star-fill" />
                    <img src={require("../img/star-fill.png")} alt="star-fill" />
                    <img src={require("../img/star-fill.png")} alt="star-fill" />
                    <img src={require("../img/star.png")} alt="star" />
                  </div>
                  <div>
                    <i className="far fa-comment-alt"></i>&nbsp;
                    <span id="shop_comment_no"></span>
                  </div>
                </div>
                <hr />
                <div className="top_flex">
                  <div className="shop_item">????????????</div>
                  <div className="flex1 time">
                    <span id="shop_time">
                      ??????????????? 11???00???22???00
                      <br />
                      ?????? 11???30 ???22???00
                    </span>
                  </div>
                </div>
                <hr />
                <div className="top_flex">
                  <div className="shop_item">????????????</div>
                  <div className="flex1 address">
                    <i className="fas fa-map-marked-alt"></i> &nbsp;
                    <span id="shop_address">????????????????????????????????????100???</span>
                  </div>
                </div>
                <hr />
                <div className="top_flex">
                  <div className="shop_item">????????????</div>
                  <div className="flex1 tel">
                    <span id="shop_tel">04-2426-4288</span>
                  </div>
                </div>
                <hr />
                <div className="top_flex">
                  <div className="shop_item">????????????</div>
                  <div className="flex1 remark">
                    <span id="shop_remark">
                      1. ?????????????????? 90 ??????
                      <br />
                      2. ??????????????????
                    </span>
                  </div>
                </div>
                <hr />
                <div className="service_box">
                  <div className="service_div" id="demo">
                    <div>
                      <span className="icon-credit-card" title="???????????????">
                        <i className="fas fa-credit-card"></i>???????????????
                      </span>
                    </div>
                    <div>
                      <span className="icon-wifi" title="?????? wifi">
                        <i className="fas fa-wifi"></i>?????? wifi
                      </span>
                    </div>
                    <div>
                      <span className="icon-baby" title="??????????????????">
                        <i className="fas fa-baby"></i>??????????????????
                      </span>
                    </div>
                    <div>
                      <span className="icon-service-fee" title="???????????????">
                        <i className="fas fa-hand-holding-usd"></i>???????????????
                      </span>
                    </div>
                    <div>
                      <span className="icon-paper-plane" title="????????????">
                        <i className="fas fa-paper-plane"></i>????????????
                      </span>
                    </div>
                    <div>
                      <span className="icon-shopping-bag" title="????????????">
                        <i className="fas fa-shopping-bag"></i>????????????
                      </span>
                    </div>
                    <div>
                      <span className="icon-time-limit" title="????????????">
                        <i className="fas fa-user-clock"></i>????????????
                      </span>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <div className="shop_wrapper" id="comment">
                <div className="top_flex">
                  <h4 className="shop_title flex1">
                    ??????
                  </h4>
                  <button className="add_comment">
                    <i className="fas fa-plus-circle">????????????</i>
                  </button>
                </div>
                <div className="modal modal-comment" tabIndex="-1">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">
                          <b>????????????????????????????????????</b>
                        </h5>
                      </div>
                      <div className="modal-body">
                        <div>
                          <p>???????????????
                            <span></span>
                          </p>
                        </div>
                        <div className="starMarking">
                          <div className="functionName">{this.props.data}</div>
                          <div className="starContainer">{starItems}</div>
                        </div>
                        <div>
                          <p>???????????????</p>
                          <textarea
                            name="comment"
                            id=""
                            cols="30"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn_close"
                          data-dismiss="modal"
                        >
                          ??????
                        </button>
                        <button type="button" className="btn_add">
                          ??????
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment_box">
                  <div className="comment_item">
                    <div className="comment_left">
                      <div className="mid_flex">
                        <div className="comment_img_wrapper">
                          <img
                            src={require("../img/user.png")}
                            alt="member_img"
                            className="comment_img"
                          />
                        </div>
                        <div className="flex1">
                          <div className="top_flex">
                            <div className="flex1">?????????</div>
                            <div className="record_time">
                              2022-03-07 09:15:45
                            </div>
                          </div>
                          <div className="top_flex">
                            <div className="shop_rate_wrapper flex1">
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                              <img src={require("../img/star.png")} alt="star" />
                              <img src={require("../img/star.png")} alt="star" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main_comment">
                        <p>??????</p>
                      </div>
                    </div>
                    <div className="comment_right">
                      <ul className="comment_right_pic">
                        <li className="pic_item">
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="comment_item">
                    <div className="comment_left">
                      <div className="mid_flex">
                        <div className="comment_img_wrapper">
                          <img
                            src={require("../img/user.png")}
                            alt="member_img"
                            className="comment_img"
                          />
                        </div>
                        <div className="flex1">
                          <div className="top_flex">
                            <div className="flex1">?????????</div>
                            <div className="record_time">
                              2021-08-09 15:30:05
                            </div>
                          </div>
                          <div className="top_flex">
                            <div className="shop_rate_wrapper flex1">
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                              <img src={require("../img/star-fill.png")} alt="star-fill" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="main_comment">
                        <p>??????????????????????????????????????????</p>
                      </div>
                    </div>
                    <div className="comment_right">
                      <ul className="comment_right_pic">
                        <li className="pic_item">
                          <img
                            src={require("../img/??????2.jpg")}
                            alt="????????????"
                          />
                          <img
                            src={require("../img/??????3.jpg")}
                            alt="????????????"
                          />
                          <img
                            src={require("../img/??????4.jpg")}
                            alt="????????????"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space"></div>
            </div>
          </div>
        </section>
        <button type="button" className="on_top_btn">
          <i className="fas fa-arrow-up"></i>
        </button>
        <div className="footer_page">
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Restaurant_page;
