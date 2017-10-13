import "react-hot-loader/patch";
import * as React from "react";
import { AppContainer } from 'react-hot-loader';
import * as ReactDOM from "react-dom";

let route = require("./routes").route;

function renderApp(Component) {
    ReactDOM.render(
        <AppContainer>
            {Component}
        </AppContainer>,
        document.getElementById("main")
    );
}

renderApp(route);

if (module.hot) {
    module.hot.accept('./routes', () => {
        route = require("./routes").route;
        renderApp(route);
    });
}