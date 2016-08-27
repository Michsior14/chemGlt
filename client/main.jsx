import React from "react";
import {FlowRouter} from "meteor/kadira:flow-router";
import {mount} from "react-mounter";

import App from "/imports/ui/App";
import Home from "/imports/ui/Home";
import TextEditor from "/imports/ui/text_editor/TextEditor";


FlowRouter.route('/', {
    name: "Home page",
    action: function() {
        mount(App, {
            main: <Home />
        });
    }
});

FlowRouter.route('/word', {
    name: "Word editor",
    action: function() {
        mount(App, {
            main: <TextEditor />
        })
    }
});
