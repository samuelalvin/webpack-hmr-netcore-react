import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {App} from "./app/app"

export const route = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
        </Switch>
    </BrowserRouter>
);