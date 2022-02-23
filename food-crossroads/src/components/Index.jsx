import React, { Component } from 'react';
import $ from "jquery";
import Header from './header';
import Footer from './footer';
import "../css/style.css";
import "../css/index.css";
import Axios from "axios";

class Index extends Component {
    state = {

    }

    async componentDidMount() {
        var url = `http://localhost:8000/restaurant/${this.props.match.params.category}`;
        var result = await Axios.get(url);
        this.state.Restaurant = result.data;
        console.log(result.data);
        this.setState({});
    }

    async componentDidMount() {
        var url = `http://localhost:8000/service/${this.props.match.params.service}`;
        var result = await Axios.get(url);
        this.state.Restaurant = result.data;
        console.log(result.data);
        this.setState({});
    }

    componentDidMount() {
        // 收闔選單
        $(".dropdown_label").click(function (e) {
            e.preventDefault();
            $(this).parent().find(".dropdown_div").slideToggle();
            $(this).parent().siblings().find(".dropdown_div").slideUp();
        });
        // 手機版收闔選單
        $(".mobile_dropdown_label").click(function (e) {
            e.preventDefault();
            $(this).parent().find(".mobile_dropdown_div").slideToggle();
            $(this).parent().siblings().find(".mobile_dropdown_div").slideUp();
        });
        // 關閉選單
        $(".tab_close,.chk_close").click(function () {
            $(".dropdown_div").slideUp();
        });
        // 手機版選單
        $(".search_mobile_div").click(function () {
            $(".mobile_div").css("display", "unset");
        });
        // 關閉選單
        $(".turn_off").click(function () {
            $(".mobile_div").css("display", "none");
        });

        $(".mobile_tab_content span").click(function () {
            var text = $(this).text();
            $(".area_label").html(`<i class="fas fa-map-marker-alt"></i>${text}`);
        });

        $(".tab_content span").click(function () {
            var text = $(this).text();
            $(".area_label").html(`<i class="fas fa-map-marker-alt"></i>${text}`);
        });


        // 置頂按鈕:點選後回到頂端
        $(".ontop_btn").click(function () {
            $("html,body").animate({ scrollTop: 0 }, 300);
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {
                $(".ontop_btn").fadeIn(100);
            } else {
                $(".ontop_btn").stop().fadeOut(100);
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <header className="header_page">
                    <Header />
                </header>
                <section id="search_box">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="" method="">
                                    <div className="search_div">
                                        <input className="search_keyword" id="keyword" type="text" placeholder="請輸入餐廳關鍵字" />
                                        <div className="area_div">
                                            <input type="checkbox" className="area_btn" id="area_btn" />
                                            <label onClick={this.area_btn_click} htmlFor="area_btn" className="area_label dropdown_label"><i className="fas fa-map-marker-alt"></i>請選擇地區<i
                                                className="fas fa-sort-down"></i></label>

                                            <div className="tab_div dropdown_div">
                                                <div className="tab_css">

                                                    <input id="tab1" type="radio" name="tab" />
                                                    <label htmlFor="tab1">北部</label>
                                                    <ul className="tab_content">
                                                        <li data-value="基隆市">
                                                            <span>基隆市</span>
                                                        </li>
                                                        <li value="台北市">
                                                            <span>台北市</span>
                                                        </li>
                                                        <li value="新北市">
                                                            <span>新北市</span>
                                                        </li>
                                                        <li value="桃園市">
                                                            <span>桃園市</span>
                                                        </li>
                                                        <li value="新竹市">
                                                            <span>新竹市</span>
                                                        </li>
                                                        <li value="新竹縣">
                                                            <span>新竹縣</span>
                                                        </li>
                                                    </ul>

                                                    <input id="tab2" type="radio" name="tab" />
                                                    <label htmlFor="tab2">中部</label>
                                                    <ul className="tab_content">
                                                        <li value="苗栗縣">
                                                            <span>苗栗縣</span>
                                                        </li>
                                                        <li value="台中市">
                                                            <span>台中市</span>
                                                        </li>
                                                        <li value="南投縣">
                                                            <span>南投縣</span>
                                                        </li>
                                                        <li value="彰化縣">
                                                            <span>彰化縣</span>
                                                        </li>
                                                        <li value="雲林縣">
                                                            <span>雲林縣</span>
                                                        </li>
                                                    </ul>

                                                    <input id="tab3" type="radio" name="tab" />
                                                    <label htmlFor="tab3">南部</label>
                                                    <ul className="tab_content">
                                                        <li value="嘉義市">
                                                            <span>嘉義市</span>
                                                        </li>
                                                        <li value="嘉義縣">
                                                            <span>嘉義縣</span>
                                                        </li>
                                                        <li value="台南市">
                                                            <span>台南市</span>
                                                        </li>
                                                        <li value="高雄市">
                                                            <span>高雄市</span>
                                                        </li>
                                                        <li value="屏東縣">
                                                            <span>屏東縣</span>
                                                        </li>
                                                    </ul>

                                                    <input id="tab4" type="radio" name="tab" />
                                                    <label htmlFor="tab4">東部</label>
                                                    <ul className="tab_content">
                                                        <li value="宜蘭縣">
                                                            <span>宜蘭縣</span>
                                                        </li>
                                                        <li value="花蓮縣">
                                                            <span>花蓮縣</span>
                                                        </li>
                                                        <li value="台東縣">
                                                            <span>台東縣</span>
                                                        </li>
                                                    </ul>

                                                    <input id="tab5" type="radio" name="tab" />
                                                    <label htmlFor="tab5">離島</label>
                                                    <ul className="tab_content">
                                                        <li value="澎湖縣">
                                                            <span>澎湖縣</span>
                                                        </li>
                                                        <li value="連江縣">
                                                            <span>連江縣</span>
                                                        </li>
                                                        <li value="金門縣">
                                                            <span>金門縣</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="tab_close">
                                                    關閉
                                                </div>
                                            </div>
                                        </div>

                                        <div className="other_div">
                                            <input type="checkbox" className="other_btn" id="other_btn" />
                                            <label htmlFor="other_btn" className="other_label dropdown_label"><i className="fas fa-hand-point-up"></i>進階搜尋<i
                                                className="fas fa-sort-down"></i></label>

                                            <div className="chk_div dropdown_div">
                                                <div className="chk_css">
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="child_seats" value="提供兒童座椅" />
                                                        <label htmlFor="child_seats">提供兒童座椅</label>
                                                    </div>
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="barrier_free" value="無障礙設施" />
                                                        <label htmlFor="barrier_free">無障礙設施</label>
                                                    </div>
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="min_consumption" value="最低消費限制" />
                                                        <label htmlFor="min_consumption">最低消費限制</label>
                                                    </div>
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="limit_meal_time" value="限制用餐時間" />
                                                        <label htmlFor="limit_meal_time">限制用餐時間</label>
                                                    </div>
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="delivery" value="提供外送" />
                                                        <label htmlFor="delivery">提供外送</label>
                                                    </div>
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="service_free" value="收取服務費" />
                                                        <label htmlFor="service_free">收取服務費</label>
                                                    </div>
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="parking" value="附設停車場" />
                                                        <label htmlFor="parking">附設停車場</label>
                                                    </div>
                                                    <div className="chk_item">
                                                        <input className="chk_chk" type="checkbox" name="service" id="allow_pets" value="允許攜帶寵物" />
                                                        <label htmlFor="allow_pets">允許攜帶寵物</label>
                                                    </div>

                                                </div>
                                                <div className="chk_close">
                                                    關閉
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <button className="search_btn" onClick={this.send}>搜尋</button>
                                        </div>
                                    </div>
                                </form>
                                <form action="">
                                    <div className="search_mobile_div">
                                        <div className="search_mobile_inline_div">
                                            <i className="fas fa-search search_icon"></i>
                                            <label className="search_label">搜尋餐廳</label>
                                        </div>
                                    </div>
                                    <div className="mobile_div">
                                        <div className="mobile_inline_div">
                                            <div className="turn_off">
                                                <i className="fas fa-times"></i>
                                            </div>
                                            <input className="search_keyword" id="keyword" type="text" placeholder="請輸入餐廳關鍵字" />
                                            <div className="area_div">
                                                <label htmlFor="area_btn" className="area_label mobile_tab_label"><i className="fas fa-map-marker-alt"></i>請選擇地區<i
                                                    className="fas fa-sort-down"></i></label>
                                            </div>
                                            <div className="other_div">
                                                <label htmlFor="other_btn" className="other_label mobile_tab_label"><i className="fas fa-hand-point-up"></i>進階搜尋<i
                                                    className="fas fa-sort-down"></i></label>
                                            </div>
                                            <div className="dropdown">
                                                <button className="search_btn">搜尋</button>
                                            </div>
                                        </div>
                                        <div id="area" className="mobile_tab_div">
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">北部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>基隆市</span>
                                                    <span>台北市</span>
                                                    <span>新北市</span>
                                                    <span>桃園市</span>
                                                    <span>新竹市</span>
                                                    <span>新竹縣</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">中部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>苗栗縣</span>
                                                    <span>台中市</span>
                                                    <span>南投縣</span>
                                                    <span>彰化縣</span>
                                                    <span>雲林縣</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">南部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>嘉義市</span>
                                                    <span>嘉義縣</span>
                                                    <span>台南市</span>
                                                    <span>高雄市</span>
                                                    <span>屏東縣</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">東部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>宜蘭縣</span>
                                                    <span>花蓮縣</span>
                                                    <span>台東縣</span>
                                                </div>

                                            </div>
                                            <div className="mobile_tab_css">

                                                <label className="mobile_dropdown_label">離島</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>澎湖縣</span>
                                                    <span>連江縣</span>
                                                    <span>金門縣</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div id="other" className="mobile_tab_div">
                                            <div className="mobile_chk_css">
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="child_seats" id="child_seats" value="2" />
                                                    <label htmlFor="child_seats">提供兒童座椅</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="barrier_free" id="barrier_free" value="2" />
                                                    <label htmlFor="barrier_free">無障礙設施</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="min_consumption" id="min_consumption" value="2" />
                                                    <label htmlFor="min_consumption">最低消費限制</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="limit_meal_time" id="limit_meal_time" value="2" />
                                                    <label htmlFor="limit_meal_time">限制用餐時間</label>
                                                </div>
                                            </div>
                                            <div className="mobile_chk_css">
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="delivery" id="delivery" value="2" />
                                                    <label htmlFor="delivery">提供外送</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="service_free" id="service_free" value="2" />
                                                    <label htmlFor="service_free">收取服務費</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="parking" id="parking" value="2" />
                                                    <label htmlFor="parking">附設停車場</label>
                                                </div>
                                                <div className="mobile_chk_item">
                                                    <input className="mobile_chk_chk" type="checkbox" name="allow_pets" id="allow_pets" value="2" />
                                                    <label htmlFor="allow_pets">允許攜帶寵物</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="kind_page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="kind_div">
                                    <div>
                                        <h3>今天要吃什麼</h3>
                                    </div>
                                    <ul className="water_fall">
                                        <li className="kind_span">
                                            <a href="/restaurant/list/義式料理" title="義式料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/italian_food.png')} alt="義式料理" />
                                                    <span>義式料理</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/中式料理" title="中式料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/chinese_food.png')} alt="中式料理" />
                                                    <span>中式料理</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/法式料理" title="法式料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/french_food.png')} alt="法式料理" />
                                                    <span>法式料理</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/美式餐廳" title="美式料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/american_food.png')} alt="美式料理" />
                                                    <span>美式料理</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/日式料理" title="日式料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/japanese_food.png')} alt="日式料理" />
                                                    <span>日式料理</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/韓式料理" title="韓式料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/korean_food.png')} alt="韓式料理" />
                                                    <span>韓式料理</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/中東料理" title="中東料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/middle_east_food.png')} alt="中東料理" />
                                                    <span>中東料理</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="kind_span">
                                            <a href="/restaurant/list/港式料理" title="港式料理">
                                                <div className="index_img">
                                                    <img src={require('../img/index_img/port_food.png')} alt="港式料理" />
                                                    <span>港式料理</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <button type="button" className="ontop_btn" onClick={this.topfunction}>
                    <i className="fas fa-arrow-up"></i>
                </button>

                <footer className="footer_page">
                    <Footer />
                </footer>
            </React.Fragment>
        );
    }
}

export default Index;

