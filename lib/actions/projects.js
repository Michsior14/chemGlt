import {Meteor} from "meteor/meteor";

import Projects from "/lib/collections/projects";

const projectActions = {
	updateList: () => {
		return {
			type: 			'UPDATE_PROJECTS_LIST',
			projectsList: 	Projects.find({}).fetch()
		}
	},

	subscribed: ( ) => {
		console.log(Projects.find({}).fetch());
		return {
			type: 			'PROJECTS_SUBSCRIBED',
			projectsList: 	Projects.find({}).fetch()
		}
	},

	orderSub: ( ) => {
		return {
			type: 			'PROJECTS_ORDER_SUB',
		}
	}	
}


export default projectActions;