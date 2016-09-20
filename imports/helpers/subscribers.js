import { Meteor } from "meteor/meteor";
import graphActions from "/lib/actions/graph";
import projectActions from "/lib/actions/projects";


export function subscribeProjects( dispatch ){
	dispatch(projectActions.orderSub());	
	Meteor.subscribe("projects", [], () => {
		dispatch(projectActions.subscribed());
	});
}

export function subscribeGraphs( dispatch, projectId ){
	dispatch(graphActions.orderSub(projectId));
	Meteor.subscribe("graphs", projectId, () => {
		dispatch(graphActions.subscribed(projectId));
	});
}