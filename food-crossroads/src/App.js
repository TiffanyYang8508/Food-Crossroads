import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Index from "./components/Index";
import Member_register from './components/member_register';


class App extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Index} exact/>
                    <Route path="/register" component={Member_register} exact/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
