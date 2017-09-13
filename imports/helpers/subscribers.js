import { Meteor } from "meteor/meteor";
import graphActions from "/lib/actions/graph";
import projectActions from "/lib/actions/projects";

let graphSub = null;
let projectSub = null;

export function subscribeProjects( dispatch ){
	dispatch(projectActions.orderSub());
	if ( projectSub ) {
		projectSub.stop();
	}	
	projectSub = Meteor.subscribe("projects", [], () => {
		dispatch(projectActions.subscribed());
	});
}

export function subscribeGraphs( dispatch, projectId ){
	dispatch(graphActions.orderSub(projectId));
	if ( graphSub ) {
		graphSub.stop();
	}
	graphSub = Meteor.subscribe("graphs", projectId, () => {
		dispatch(graphActions.subscribed(projectId));
	});
}