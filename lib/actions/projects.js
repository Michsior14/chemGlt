import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";


export function updateProjectsList() {
	return {
		type: 			'UPDATE_PROJECTS_LIST',
		projectsList: 	Projects.find().fetch()
	}
}