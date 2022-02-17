import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Index from "./components/Index";
import "./css/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


class App extends Component {
    state = {}
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Index} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
