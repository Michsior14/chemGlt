import {Meteor} from "meteor/meteor";
import { LOCATION_CHANGE } from "react-router-redux";

import Projects from "/lib/collections/projects";


const graphReducer = ( state = getInitialState(), action ) => {
	switch( action.type ){
		case LOCATION_CHANGE:
			const pathname = action.payload.pathname;
			if ( pathname.match(/project\/(.*)\/graphs/) ){
				const projectId =  pathname.split('/')[2];
				
				const project = Projects.findOne({ _id: projectId });
				console.log(project);
			}

		default:
			return state;
	}
};





const getInitialState = () => {
	Meteor.subscribe('projects');
	return {
		
	}	
};




export default graphReducer;