import * as React from "react";
import { Child } from "./child";

export class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Child></Child>
            </div>
        );
    }
}