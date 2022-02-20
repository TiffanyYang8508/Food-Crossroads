import React, { Component } from "react";
import "../style/css/index.css";
import "../style/css/style.css";
import "../style/fontawesome-free-5.15.4-web/css/all.css";

class Index extends Component {
  state = {};
  render() {
    return (
      <body>
        <div class="header_page">
          <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="index.html">
                <img src={require("../style/img/logo.png")} alt="LOGO" />
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

        <section id="search_box">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <form action="" method="">
                  <div class="search_div">
                    <input
                      class="search_keyword"
                      id="keyword"
                      type="text"
                      placeholder="請輸入餐廳關鍵字"
                    />
                    <div class="area_div">
                      <input type="checkbox" class="area_btn" id="area_btn" />
                      <label for="area_btn" class="area_label dropdown_label">
                        <i class="fas fa-map-marker-alt"></i>請選擇地區
                        <i class="fas fa-sort-down"></i>
                      </label>

                      <div class="tab_div dropdown_div">
                        <div class="tab_css">
                          <input
                            id="tab1"
                            type="radio"
                            name="tab"
                            checked="checked"
                          />
                          <label for="tab1">北部</label>
                          <div class="tab_content">
                            <span>基隆市</span>
                            <span>台北市</span>
                            <span>新北市</span>
                            <span>桃園市</span>
                            <span>新竹市</span>
                            <span>新竹縣</span>
                          </div>

                          <input id="tab2" type="radio" name="tab" />
                          <label for="tab2">中部</label>
                          <div class="tab_content">
                            <span>苗栗縣</span>
                            <span>台中市</span>
                            <span>南投縣</span>
                            <span>彰化縣</span>
                            <span>雲林縣</span>
                          </div>

                          <input id="tab3" type="radio" name="tab" />
                          <label for="tab3">南部</label>
                          <div class="tab_content">
                            <span>嘉義市</span>
                            <span>嘉義縣</span>
                            <span>台南市</span>
                            <span>高雄市</span>
                            <span>屏東縣</span>
                          </div>

                          <input id="tab4" type="radio" name="tab" />
                          <label for="tab4">東部</label>
                          <div class="tab_content">
                            <span>宜蘭縣</span>
                            <span>花蓮縣</span>
                            <span>台東縣</span>
                          </div>

                          <input id="tab5" type="radio" name="tab" />
                          <label for="tab5">離島</label>
                          <div class="tab_content">
                            <span>澎湖縣</span>
                            <span>連江縣</span>
                            <span>金門縣</span>
                          </div>
                        </div>
                        <div class="tab_close">關閉</div>
                      </div>
                    </div>

                    <div class="other_div">
                      <input type="checkbox" class="other_btn" id="other_btn" />
                      <label for="other_btn" class="other_label dropdown_label">
                        <i class="fas fa-hand-point-up"></i>進階搜尋
                        <i class="fas fa-sort-down"></i>
                      </label>

                      <div class="chk_div dropdown_div">
                        <div class="chk_css">
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="child_seats"
                              id="child_seats"
                              value="2"
                            />
                            <label for="child_seats">提供兒童座椅</label>
                          </div>
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="barrier_free"
                              id="barrier_free"
                              value="2"
                            />
                            <label for="barrier_free">無障礙設施</label>
                          </div>
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="min_consumption"
                              id="min_consumption"
                              value="2"
                            />
                            <label for="min_consumption">最低消費限制</label>
                          </div>
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="limit_meal_time"
                              id="limit_meal_time"
                              value="2"
                            />
                            <label for="limit_meal_time">限制用餐時間</label>
                          </div>
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="delivery"
                              id="delivery"
                              value="2"
                            />
                            <label for="delivery">提供外送</label>
                          </div>
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="service_free"
                              id="service_free"
                              value="2"
                            />
                            <label for="service_free">收取服務費</label>
                          </div>
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="parking"
                              id="parking"
                              value="2"
                            />
                            <label for="parking">附設停車場</label>
                          </div>
                          <div class="chk_item">
                            <input
                              class="chk_chk"
                              type="checkbox"
                              name="allow_pets"
                              id="allow_pets"
                              value="2"
                            />
                            <label for="allow_pets">允許攜帶寵物</label>
                          </div>
                        </div>
                        <div class="chk_close">關閉</div>
                      </div>
                    </div>

                    <div class="dropdown">
                      <button class="search_btn">搜尋</button>
                    </div>
                  </div>
                </form>
                <form action="">
                  <div class="search_mobile_div">
                    <div class="search_mobile_inline_div">
                      <i class="fas fa-search search_icon"></i>
                      <label class="search_label">搜尋餐廳</label>
                    </div>
                  </div>
                  <div class="mobile_div">
                    <div class="mobile_inline_div">
                      <div class="turn_off">
                        <i class="fas fa-times"></i>
                      </div>
                      <input
                        class="search_keyword"
                        id="keyword"
                        type="text"
                        placeholder="請輸入餐廳關鍵字"
                      />
                      <div class="area_div">
                        <label
                          for="area_btn"
                          onclick="open_tab('area')"
                          class="area_label mobile_tab_label"
                        >
                          <i class="fas fa-map-marker-alt"></i>請選擇地區
                          <i class="fas fa-sort-down"></i>
                        </label>
                      </div>
                      <div class="other_div">
                        <label
                          for="other_btn"
                          onclick="open_tab('other')"
                          class="other_label mobile_tab_label"
                        >
                          <i class="fas fa-hand-point-up"></i>進階搜尋
                          <i class="fas fa-sort-down"></i>
                        </label>
                      </div>
                      <div class="dropdown">
                        <button class="search_btn">搜尋</button>
                      </div>
                    </div>
                    <div id="area" class="mobile_tab_div">
                      <div class="mobile_tab_css">
                        <label class="mobile_dropdown_label">北部</label>
                        <div class="mobile_tab_content mobile_dropdown_div">
                          <span>基隆市</span>
                          <span>台北市</span>
                          <span>新北市</span>
                          <span>桃園市</span>
                          <span>新竹市</span>
                          <span>新竹縣</span>
                        </div>
                      </div>
                      <div class="mobile_tab_css">
                        <label class="mobile_dropdown_label">中部</label>
                        <div class="mobile_tab_content mobile_dropdown_div">
                          <span>苗栗縣</span>
                          <span>台中市</span>
                          <span>南投縣</span>
                          <span>彰化縣</span>
                          <span>雲林縣</span>
                        </div>
                      </div>
                      <div class="mobile_tab_css">
                        <label class="mobile_dropdown_label">南部</label>
                        <div class="mobile_tab_content mobile_dropdown_div">
                          <span>嘉義市</span>
                          <span>嘉義縣</span>
                          <span>台南市</span>
                          <span>高雄市</span>
                          <span>屏東縣</span>
                        </div>
                      </div>
                      <div class="mobile_tab_css">
                        <label class="mobile_dropdown_label">東部</label>
                        <div class="mobile_tab_content mobile_dropdown_div">
                          <span>宜蘭縣</span>
                          <span>花蓮縣</span>
                          <span>台東縣</span>
                        </div>
                      </div>
                      <div class="mobile_tab_css">
                        <label class="mobile_dropdown_label">離島</label>
                        <div class="mobile_tab_content mobile_dropdown_div">
                          <span>澎湖縣</span>
                          <span>連江縣</span>
                          <span>金門縣</span>
                        </div>
                      </div>
                    </div>
                    <div id="other" class="mobile_tab_div">
                      <div class="mobile_chk_css">
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="child_seats"
                            id="child_seats"
                            value="2"
                          />
                          <label for="child_seats">提供兒童座椅</label>
                        </div>
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="barrier_free"
                            id="barrier_free"
                            value="2"
                          />
                          <label for="barrier_free">無障礙設施</label>
                        </div>
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="min_consumption"
                            id="min_consumption"
                            value="2"
                          />
                          <label for="min_consumption">最低消費限制</label>
                        </div>
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="limit_meal_time"
                            id="limit_meal_time"
                            value="2"
                          />
                          <label for="limit_meal_time">限制用餐時間</label>
                        </div>
                      </div>
                      <div class="mobile_chk_css">
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="delivery"
                            id="delivery"
                            value="2"
                          />
                          <label for="delivery">提供外送</label>
                        </div>
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="service_free"
                            id="service_free"
                            value="2"
                          />
                          <label for="service_free">收取服務費</label>
                        </div>
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="parking"
                            id="parking"
                            value="2"
                          />
                          <label for="parking">附設停車場</label>
                        </div>
                        <div class="mobile_chk_item">
                          <input
                            class="mobile_chk_chk"
                            type="checkbox"
                            name="allow_pets"
                            id="allow_pets"
                            value="2"
                          />
                          <label for="allow_pets">允許攜帶寵物</label>
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
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="kind_div">
                  <div>
                    <h3>今天要吃什麼</h3>
                  </div>
                  <div class="water_fall">
                    <div class="kind_span">
                      <a href="/search?keyword=美式料理" title="美式料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/american_food.png")}
                            alt="美式料理"
                          />
                          <span>美式料理</span>
                        </div>
                      </a>
                    </div>
                    <li class="kind_span">
                      <a href="/search?keyword=中式料理" title="中式料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/chinese_food.png")}
                            alt="中式料理"
                          />
                          <span>中式料理</span>
                        </div>
                      </a>
                    </li>
                    <li class="kind_span">
                      <a href="/search?keyword=法式料理" title="法式料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/french_food.png")}
                            alt="法式料理"
                          />
                          <span>法式料理</span>
                        </div>
                      </a>
                    </li>
                    <li class="kind_span">
                      <a href="/search?keyword=義式料理" title="義式料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/italian_food.png")}
                            alt="義式料理"
                          />
                          <span>義式料理</span>
                        </div>
                      </a>
                    </li>
                    <li class="kind_span">
                      <a href="/search?keyword=日式料理" title="日式料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/japanese_food.png")}
                            alt="日式料理"
                          />
                          <span>日式料理</span>
                        </div>
                      </a>
                    </li>
                    <li class="kind_span">
                      <a href="/search?keyword=韓式料理" title="韓式料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/korean_food.png")}
                            alt="韓式料理"
                          />
                          <span>韓式料理</span>
                        </div>
                      </a>
                    </li>
                    <li class="kind_span">
                      <a href="/search?keyword=中東料理" title="中東料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/middle_east_food.png")}
                            alt="中東料理"
                          />
                          <span>中東料理</span>
                        </div>
                      </a>
                    </li>
                    <li class="kind_span">
                      <a href="/search?keyword=港式料理" title="港式料理">
                        <div class="index_img">
                          <img
                            src={require("../style/img/port_food.png")}
                            alt="港式料理"
                          />
                          <span>港式料理</span>
                        </div>
                      </a>
                    </li>
                  </div>
                </div>
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
      </body>
    );
  }
}

export default Index;
