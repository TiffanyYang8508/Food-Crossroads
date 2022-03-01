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
import Orderpage from "./components/orderpage";
import Restaurant_page from "./components/restaurant_page";
import Restaurant_page_member from "./components/restaurant_page_loginok";
import Booking_reservation_page from "./components/booking_reservation_page";
import Booking_check_page from "./components/booking_check_page";
import Booking_finish_page from "./components/booking_finish_page";
import Restaurant_booking_today from "./components/restaurant_booking_today";
import Restaurant_self_pick_up_history from "./components/restaurant_self_pick_up_history";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact />
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
          <Route path="/register" component={Member_register} exact />
          <Route path="/register/success" component={Member_register_success} />

          <Route
            path="/restaurant/booking/history"
            component={Restaurant_booking_history}
            exact
          />
          <Route
            path="/restaurant/booking/today"
            component={Restaurant_booking_today}
            exact
          />
          <Route
            path="/restaurant/self/pick"
            component={Restaurant_self_pick_up}
            exact
          />
          <Route
            path="/restaurant/self/pick/history"
            component={Restaurant_self_pick_up_history}
            exact
          />
          <Route path="/member/login" component={Member_login} exact />
          <Route
            path="/member/login/success"
            component={Member_login_success}
            exact
          />

          <Route path="/restaurant/login" component={Restaurant_login} exact />
          <Route path="/ordermanagement/:id" component={Ordermanagement} />
          <Route path="/bookingmanagement/:id" component={BookingManagement} />
          <Route path="/member/:id" component={Member} />
          <Route path="/editmember/:id" component={EditMember} />

          <Route path="/shoppingchar" component={Shoppingchar} exact />
          <Route path="/shoppingok" component={Shoppingok} exact />
          <Route path="/orderdisplay" component={Orderdisplay} exact />
          <Route path="/orderpage/:food_category?" component={Orderpage} exact />

          <Route path="/editmemberpwd/:id" component={EditMemberpwd} />
          <Route path="/cancelbooking/:id" component={CancelBooking} />
          <Route path="/restaurant/page" component={Restaurant_page} exact />
          <Route
            path="/restaurant/page/member"
            component={Restaurant_page_member}
            exact
          />
          <Route
            path="/booking/reservation/page"
            component={Booking_reservation_page}
            exact
          />
          <Route
            path="/booking/check/page"
            component={Booking_check_page}
            exact
          />
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
