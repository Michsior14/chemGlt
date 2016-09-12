import React, {Component, PropTypes} from "react";
import {Route} from "react-router";
import App from "/imports/ui/App";
import TextEditor from "/imports/ui/text_editor/TextEditor";
import Home from "/imports/ui/Home";

let Routes = (
    <Route path="/" component={App}>
        <Route path="/home" component={Home}/>
        <Route path="/word" component={TextEditor}/>
    </Route>
);
export default Routes;