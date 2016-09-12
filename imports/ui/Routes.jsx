import React, {Component, PropTypes} from "react";
import {Route} from "react-router";
import App from "/imports/ui/App";
import TextEditor from "/imports/ui/text_editor/TextEditor";
import Home from "/imports/ui/Home";
import Error404 from "/imports/ui/errors/Error404";
import GraphList from "/imports/ui/graph/GraphList";
import ProjectView from "/imports/ui/project/ProjectView";

let Routes = [
    <Route path="/" component={App} key="mainRoutes">
        <Route path="home" component={Home}/>
        <Route path="word" component={TextEditor}/>
        <Route path="project/:projectId/graphs" component={GraphList} />
    	<Route path="project/:projectId" component={ProjectView} />
    </Route>,
    <Route path="*" component={Error404} key="errorRoutes"/>
];
export default Routes;