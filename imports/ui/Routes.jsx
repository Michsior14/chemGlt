import React, {Component, PropTypes} from "react";
import {Route} from "react-router";
import App from "/imports/ui/App";
import TextEditor from "/imports/ui/text_editor/TextEditor";
import Home from "/imports/ui/Home";
import Error404 from "/imports/ui/errors/Error404";

let Routes = [
    <Route path="/" component={App} key="/">
        <Route path="/home" component={Home}/>
        <Route path="/word" component={TextEditor}/>
    </Route>,
    <Route path="*" component={Error404} key="error"/>
];
export default Routes;