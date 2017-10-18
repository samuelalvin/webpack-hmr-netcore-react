import "react-hot-loader/patch";
import * as React from "react";
import { AppContainer } from 'react-hot-loader';
import * as ReactDOM from "react-dom";

let app = require("./app/app").App;

function renderApp(Component) {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById("main")
    );
}

renderApp(app);

if (module.hot) {
    console.log("development euy");
    module.hot.accept('./app/app', () => {
        app = require("./app/app").route;
        renderApp(app);
    });
}