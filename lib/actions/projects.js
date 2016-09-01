import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";


export function updateProjectsList() {
	console.log("UPDATE_PROJECTS_LIST");
	console.log(Meteor.userId());
	return {
		type: 			'UPDATE_PROJECTS_LIST',
		projectsList: 	Projects.find({
						    members: Meteor.userId()
						}).fetch()	
	}
}