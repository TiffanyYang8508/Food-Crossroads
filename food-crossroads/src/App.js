import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Index from "./components/Index";
import Member_register from './components/member_register';
import Restaurant_self_pick_up from './components/restaurant_self_pick_up';


class App extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Index} exact/>
                    <Route path="/register" component={Member_register} exact/>
                    <Route path="/self_pick" component={Restaurant_self_pick_up} exact/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
