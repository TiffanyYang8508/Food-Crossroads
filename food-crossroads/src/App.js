import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Index from "./components/Index";
import Member_register from "./components/member_register";
import Restaurant_self_pick_up from "./components/restaurant_self_pick_up";
import Restaurant_booking_history from "./components/restaurant_booking_history";
import MemberLogin from "./components/member_login";
import Ordermanagement from "./components/member_orderRecord";
import BookingManagement from "./components/member_bookingRecord";
import Member from "./components/member_member_info";
import EditMember from "./components/member_editmember";
import Member_login from "./components/member_login";
import Member_info from "./components/member_info";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/register" component={Member_register} exact />
          <Route path="/member/login" component={Member_login} />
          <Route path="/self_pick" component={Restaurant_self_pick_up} exact />
          <Route
            path="/booking_history"
            component={Restaurant_booking_history}
            exact
          />
          <Route path="/login" component={MemberLogin} />
          <Route path="/ordermanagement" component={Ordermanagement} />
          <Route path="/bookingmanagement" component={BookingManagement} />
          <Route path="/member/:id" component={Member_info} />
          <Route path="/editmember/:id" component={EditMember} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
