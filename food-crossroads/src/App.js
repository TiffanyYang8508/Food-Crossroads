import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Index from "./components/Index";
import Restaurant_list from "./components/restaurant_list";
import Restaurant_list_search from "./components/restaurant_list_search";
import Member_register from "./components/member_register";
import Member_register_success from "./components/member_register_success";
import Member_login from "./components/member_login";
import Member_login_success from "./components/member_login_success";
import Restaurant_self_pick_up from "./components/restaurant_self_pick_up";
import Restaurant_booking_history from "./components/restaurant_booking_history";
import Ordermanagement from "./components/member_orderRecord";
import BookingManagement from "./components/member_bookingRecord";
import Member from "./components/member_memberinfo";
import EditMember from "./components/member_editmember";
import EditMemberpwd from "./components/member_editpwd";
import CancelBooking from "./components/member_cancelbooking";
import Restaurant_login from "./components/restaurant_login";
import Shoppingchar from "./components/shoppingchar";
import Shoppingok from "./components/shoppingok";
import Orderdisplay from "./components/orderdisplay";
import Restaurant_page from "./components/restaurant_page";
import Restaurant_page_member from "./components/restaurant_page_loginok";
import Booking_reservation_page from "./components/booking_reservation_page";
import Booking_check_page from "./components/booking_check_page";
import Booking_finish_page from "./components/booking_finish_page";
import Orderpage from "./components/orderpage";
import Orderpage_group from "./components/orderpage_group";
import Restaurant_booking_today from "./components/restaurant_booking_today";
import Restaurant_self_pick_up_history from "./components/restaurant_self_pick_up_history";
import Orderfinished from "./components/orderfinished";
import Group_orderfinished from "./components/group_orderfinished";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* 首頁 */}
          <Route path="/" component={Index} exact />
          {/* 餐廳列表、搜尋 */}
          <Route
            path="/restaurant/list/:category?"
            component={Restaurant_list}
            exact
          />
          <Route
            path="/restaurant/list/keyword/:keyword"
            component={Restaurant_list_search}
            exact
          />
          <Route
            path="/restaurant/list/area/:area"
            component={Restaurant_list_search}
            exact
          />
          <Route
            path="/restaurant/list/service/:service"
            component={Restaurant_list_search}
            exact
          />
          <Route
            path="/restaurant/list/search/:area/:service"
            component={Restaurant_list_search}
            exact
          />
          {/* 會員註冊 */}
          <Route path="/register" component={Member_register} exact />
          {/* 會員註冊成功 */}
          <Route path="/register/success" component={Member_register_success} />
          {/* 歷史訂位紀錄 */}
          <Route
            path="/restaurant/booking/history"
            component={Restaurant_booking_history}
            exact
          />
          {/* 今日訂位 */}
          <Route
            path="/restaurant/booking/today"
            component={Restaurant_booking_today}
            exact
          />
          {/* 今日自取訂餐 */}
          <Route
            path="/restaurant/self/pick"
            component={Restaurant_self_pick_up}
            exact
          />
          {/* 歷史訂餐紀錄 */}
          <Route
            path="/restaurant/self/pick/history"
            component={Restaurant_self_pick_up_history}
            exact
          />
          {/* 會員登入 */}
          <Route path="/member/login" component={Member_login} exact />
          {/* 會員登入成功 */}
          <Route
            path="/member/login/success"
            component={Member_login_success}
            exact
          />
          {/* 後台管理登入 */}
          <Route path="/restaurant/login" component={Restaurant_login} exact />
          {/* 訂餐管理 */}
          <Route path="/ordermanagement/:id" component={Ordermanagement} />
          {/* 訂位管理 */}
          <Route path="/bookingmanagement/:id" component={BookingManagement} />
          {/* 會員資料 */}
          <Route path="/member/:id" component={Member} />
          {/* 會員資料修改 */}
          <Route path="/editmember/:id" component={EditMember} />
          {/* 購物車結帳 */}
          <Route path="/shoppingchar" component={Shoppingchar} exact />
          {/* 購物車下訂單 */}
          <Route path="/shoppingok" component={Shoppingok} exact />
          {/* 揪團訂餐 */}
          <Route path="/orderdisplay" component={Orderdisplay} exact />
          {/* 商品 */}
          <Route path="/orderpage" component={Orderpage} exact />
          {/* 揪團商品 */}
          <Route path="/orderpagegroup" component={Orderpage_group} exact />
          <Route
            path="/orderpage/:food_category?"
            component={Orderpage}
            exact
          />
          {/* 完成訂單 */}
          <Route path="/orderfinished" component={Orderfinished} exact />
          {/* 揪團完成訂單 */}
          <Route
            path="/group/orderfinished"
            component={Group_orderfinished}
            exact
          />
          {/* 會員密碼修改 */}
          <Route path="/editmemberpwd/:id" component={EditMemberpwd} />
          {/* 取消訂位 */}
          <Route path="/cancelbooking/:id" component={CancelBooking} />
          {/* 餐廳資訊 */}
          <Route path="/restaurant/page" component={Restaurant_page} exact />
          <Route
            path="/restaurant/page/member"
            component={Restaurant_page_member}
            exact
          />
          {/* 預約訂位 */}
          <Route
            path="/booking/reservation/page"
            component={Booking_reservation_page}
            exact
          />
          {/* 預約訂位確認 */}
          <Route
            path="/booking/check/page"
            component={Booking_check_page}
            exact
          />
          {/* 預約訂位完成 */}
          <Route
            path="/booking/finish/page"
            component={Booking_finish_page}
            exact
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
