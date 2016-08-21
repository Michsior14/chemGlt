import React from "react";
import {render} from "react-dom";
import {FlowRouter} from "meteor/kadira:flow-router";
import {mount} from "react-mounter";
import App from "../imports/ui/App.jsx";
import Home from "../imports/ui/Home.jsx";

FlowRouter.route('/', {
    name: "Home page",
    action() {
        mount(App, {
            main: <Home />
        });
    }
});