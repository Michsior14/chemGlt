import {Meteor} from "meteor/meteor";
import React from "react";
import {FlowRouter} from "meteor/kadira:flow-router";

import { Provider } from 'react-redux';
import {DocHead} from "meteor/kadira:dochead"
import {mount} from "react-mounter";

import App from "/imports/ui/App";
import Root from "/imports/ui/Root"
import TextEditor from "/imports/ui/text_editor/TextEditor";

const metaInfo = {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
};
DocHead.addMeta(metaInfo);


FlowRouter.route('/', {
    name: "Home page",
    action: function() {
        mount(Root, {
        });
    }
});

// FlowRouter.route('/word', {
//     name: "Word editor",
//     action: function() {
//         mount(App, {
//             main: <TextEditor />
//         })
//     }
// });
