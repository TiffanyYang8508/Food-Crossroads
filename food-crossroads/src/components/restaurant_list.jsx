import React, { Component } from 'react';
import $ from "jquery";
import Header from './header';
import Footer from './footer';
import "../css/list.css";
import Axios from "axios";

class Restaurant_list extends Component {
    state = {
        Restaurant: [
            {
                restaurant_name: "7分so",
                restaurant_address: "台中市崇德路一段518號",
                restaurant_category_id: "美式餐廳"
            }
        ]
    }

    async componentDidMount() {
        if (this.props.match.params.category === undefined) {
            var url = `http://localhost:8000/restaurant/list`;
        } else {
            var url = `http://localhost:8000/restaurant/list/${this.props.match.params.category}`;
        }
        var result = await Axios.get(url);
        this.state.Restaurant = result.data;
        console.log(result.data);
        this.setState({});
    }

    render() {
        return (
            <React.Fragment>
                <header className="header_page">
                    <Header />
                </header>
                <section id="search_list">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form action="" method="">
                                    <div className="search_div">
                                        <input className="search_keyword" id="keyword" type="text" placeholder="請輸入餐廳關鍵字" />
                                        <div className="area_div">
                                            <input type="checkbox" className="area_btn" id="area_btn" />
                                            <label htmlFor="area_btn" className="area_label dropdown_label"><i
                                                className="fas fa-map-marker-alt"></i>請選擇地區<i className="fas fa-sort-down"></i></label>

                                            <div className="tab_div dropdown_div">
                                                <div className="tab_css">
                                                    {/* 北部區塊 start */}
                                                    <input id="tab1" type="radio" name="tab" />
                                                    <label htmlFor="tab1">北部</label>
                                                    <div className="tab_content">
                                                        <span>基隆市</span>
                                                        <span>台北市</span>
                                                        <span>新北市</span>
                                                        <span>桃園市</span>
                                                        <span>新竹市</span>
                                                        <span>新竹縣</span>
                                                    </div>
                                                    {/* 北部區塊 end */}

                                                    {/* 中部區塊 start */}
                                                    <input id="tab2" type="radio" name="tab" />
                                                    <label htmlFor="tab2">中部</label>
                                                    <div className="tab_content">
                                                        <span>苗栗縣</span>
                                                        <span>台中市</span>
                                                        <span>南投縣</span>
                                                        <span>彰化縣</span>
                                                        <span>雲林縣</span>
                                                    </div>
                                                    {/* 中部區塊 end */}

                                                    {/* 南部區塊 start */}
                                                    <input id="tab3" type="radio" name="tab" />
                                                    <label htmlFor="tab3">南部</label>
                                                    <div className="tab_content">
                                                        <span>嘉義市</span>
                                                        <span>嘉義縣</span>
                                                        <span>台南市</span>
                                                        <span>高雄市</span>
                                                        <span>屏東縣</span>
                                                    </div>
                                                    {/* 南部區塊 end */}

                                                    {/* 東部區塊 start */}
                                                    <input id="tab4" type="radio" name="tab" />
                                                    <label htmlFor="tab4">東部</label>
                                                    <div className="tab_content">
                                                        <span>宜蘭縣</span>
                                                        <span>花蓮縣</span>
                                                        <span>台東縣</span>
                                                    </div>
                                                    {/* 東部區塊 end */}

                                                    {/* 離島區塊 start */}
                                                    <input id="tab5" type="radio" name="tab" />
                                                    <label htmlFor="tab5">離島</label>
                                                    <div className="tab_content">
                                                        <span>澎湖縣</span>
                                                        <span>連江縣</span>
                                                        <span>金門縣</span>
                                                    </div>
                                                    {/* 離島區塊 end */}

                                                </div>
                                                <div className="tab_close">
                                                    關閉
                                                </div>
                                            </div>
                                        </div>

                                        <div className="other_div">
                                            <input type="checkbox" className="other_btn" id="other_btn" />
                                            <label htmlFor="other_btn" className="other_label dropdown_label"><i
                                                className="fas fa-hand-point-up"></i>進階搜尋<i className="fas fa-sort-down"></i></label>

                                            <div className="chk_div dropdown_div">
                                                <div className="chk_css">
                                                    <input className="chk_item" type="checkbox" id="child_seats" name="child_seats" value="2" />
                                                    <label htmlFor="child_seats">提供兒童座椅</label>
                                                    <input className="chk_item" type="checkbox" id="barrier_free" name="barrier_free" value="2" />
                                                    <label htmlFor="barrier_free">無障礙設施</label>
                                                    <input className="chk_item" type="checkbox" id="min_consumption" name="min_consumption" value="2" />
                                                    <label htmlFor="min_consumption">最低消費限制</label>
                                                    <input className="chk_item" type="checkbox" id="limit_meal_time" name="limit_meal_time" value="2" />
                                                    <label htmlFor="limit_meal_time">限制用餐時間</label>
                                                    <input className="chk_item" type="checkbox" id="service_free" name="service_free" value="2" />
                                                    <label htmlFor="service_free">收取服務費</label>
                                                    <input className="chk_item" type="checkbox" id="allow_pets" name="allow_pets" value="2" />
                                                    <label htmlFor="allow_pets">允許攜帶寵物</label>
                                                    <input className="chk_item" type="checkbox" id="delivery" name="delivery" value="2" />
                                                    <label htmlFor="delivery">提供外送</label>
                                                    <input className="chk_item" type="checkbox" id="parking" name="parking" value="2" />
                                                    <label htmlFor="parking">附設停車場</label>
                                                </div>
                                                <div className="chk_close">
                                                    關閉
                                                </div>
                                            </div>
                                        </div>

                                        <div className="dropdown">
                                            <button className="search_btn">搜尋</button>
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
                                                <label htmlFor="area_btn" onclick="open_tab('area')" className="area_label mobile_tab_label"><i className="fas fa-map-marker-alt"></i>請選擇地區<i
                                                    className="fas fa-sort-down"></i></label>
                                            </div>
                                            <div className="other_div">
                                                <label htmlFor="other_btn" onclick="open_tab('other')" className="other_label mobile_tab_label"><i className="fas fa-hand-point-up"></i>進階搜尋<i
                                                    className="fas fa-sort-down"></i></label>
                                            </div>
                                            <div className="dropdown">
                                                <button className="search_btn">搜尋</button>
                                            </div>
                                        </div>
                                        <div id="area" className="mobile_tab_div">
                                            <div className="mobile_tab_css">
                                                {/* 北部區塊 start */}
                                                <label className="mobile_dropdown_label">北部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>基隆市</span>
                                                    <span>台北市</span>
                                                    <span>新北市</span>
                                                    <span>桃園市</span>
                                                    <span>新竹市</span>
                                                    <span>新竹縣</span>
                                                </div>
                                                {/* 北部區塊 end */}
                                            </div>
                                            <div className="mobile_tab_css">
                                                {/* 中部區塊 start */}
                                                <label className="mobile_dropdown_label">中部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>苗栗縣</span>
                                                    <span>台中市</span>
                                                    <span>南投縣</span>
                                                    <span>彰化縣</span>
                                                    <span>雲林縣</span>
                                                </div>
                                                {/* 中部區塊 end  */}
                                            </div>
                                            <div className="mobile_tab_css">
                                                {/* 南部區塊 start  */}
                                                <label className="mobile_dropdown_label">南部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>嘉義市</span>
                                                    <span>嘉義縣</span>
                                                    <span>台南市</span>
                                                    <span>高雄市</span>
                                                    <span>屏東縣</span>
                                                </div>
                                                {/* 南部區塊 end  */}
                                            </div>
                                            <div className="mobile_tab_css">
                                                {/* 東部區塊 start  */}
                                                <label className="mobile_dropdown_label">東部</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>宜蘭縣</span>
                                                    <span>花蓮縣</span>
                                                    <span>台東縣</span>
                                                </div>
                                                {/* 東部區塊 end */}
                                            </div>
                                            <div className="mobile_tab_css">
                                                {/* 離島區塊  */}
                                                <label className="mobile_dropdown_label">離島</label>
                                                <div className="mobile_tab_content mobile_dropdown_div">
                                                    <span>澎湖縣</span>
                                                    <span>連江縣</span>
                                                    <span>金門縣</span>
                                                </div>
                                                {/* 離島區塊 end  */}
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

                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb mt-3">
                                        <li className="breadcrumb-item"><a href="index.html">首頁</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">餐廳列表</li>
                                    </ol>
                                </nav>
                                <div className="rest_div">
                                    {
                                        this.state.Restaurant.map((value, key) =>
                                            <div className="rest_list" key={key}>
                                                <div className="rest_img">
                                                {/* require("../img/restaurant_list_img/7分so.jpg") */}
                                                    <img src={`/img/restaurant_list_img/${value.restaurant_img}`} alt={value.restaurant_img} />
                                                </div>
                                                <div className="rest_text">
                                                    <p>{value.restaurant_category}</p>
                                                    <h5>{value.restaurant_name}</h5>
                                                    <h5>{value.restaurant_address}</h5>
                                                    <div className="rest_inline_div">
                                                        <span>評分</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                                <nav id="page_list" aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        {/* <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li> */}
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
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

export default Restaurant_list;