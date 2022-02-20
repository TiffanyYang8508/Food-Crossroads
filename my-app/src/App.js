import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Index from "./component/Index";
import Login from "./component/login";
import Ordermanagement from "./component/OederRecord";
import Member from "./component/member";
import EditMember from "./component/editmember";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/login" component={Login} />
          <Route path="/ordermanagement" component={Ordermanagement} />
          <Route path="/member/:id" component={Member} />
          <Route path="/editmember/:id" component={EditMember} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
