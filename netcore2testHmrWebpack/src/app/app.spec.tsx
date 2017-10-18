import * as React from "react";
import * as TestUtils from "react-dom/test-utils";
import * as ReactShallowRenderer from "react-test-renderer/shallow";
import {App} from "./app";

describe("app", function () {
    it("should be created without any problem", function () {
        let app = TestUtils.renderIntoDocument(<App></App>) as React.Component;
        expect(app).toBeDefined();
    });
});