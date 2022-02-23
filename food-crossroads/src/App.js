import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Index from "./components/Index";
import Restaurant_list from "./components/restaurant_list";
import Member_register from "./components/member_register";
import Member_register_success from "./components/member_register_success";
import Member_login from "./components/member_login";
import Restaurant_self_pick_up from "./components/restaurant_self_pick_up";
import Restaurant_booking_history from "./components/restaurant_booking_history";
import Ordermanagement from "./components/member_orderRecord";
import BookingManagement from "./components/member_bookingRecord";
import Member from "./components/member_memberinfo";
import EditMember from "./components/member_editmember";
import Restaurant_login from "./components/restaurant_login";
import Shoppingchar from './components/shoppingchar';
import Shoppingok from './components/shoppingok';
import Orderdisplay from './components/orderdisplay';
import Orderpage from "./components/orderpage";

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
          <Route path="/register" component={Member_register} exact />
          <Route path="/register/success" component={Member_register_success} />
          <Route path="/self/pick" component={Restaurant_self_pick_up} exact />
          <Route
            path="/booking_history"
            component={Restaurant_booking_history}
            exact
          />
          <Route path="/member/login" component={Member_login} />
          <Route path="/restaurant/login" component={Restaurant_login} exact />
          <Route path="/ordermanagement" component={Ordermanagement} />
          <Route path="/bookingmanagement" component={BookingManagement} />
          <Route path="/member/:id" component={Member} />
          <Route path="/editmember/:id" component={EditMember} />
          <Route path="/shoppingchar/:id" component={Shoppingchar} exact />
          <Route path="/shoppingok" component={Shoppingok} exact />
          <Route path="/orderdisplay" component={Orderdisplay} exact />
          <Route path="/orderpage/" component={Orderpage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
