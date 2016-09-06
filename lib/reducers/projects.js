import {Meteor} from "meteor/meteor";
import Projects from "/lib/collections/projects";


const projectsReducer = ( state = getInitialState(), action ) => {
	switch( action.type ){
		case 'UPDATE_PROJECTS_LIST':
			console.log(action.projectsList);
			return Object.assign({}, state, {
				projectsList: 		action.projectsList
			});		
		default:
			return state;
	}
};

const getInitialState = () => {
	Meteor.subscribe('projects');
	return {
		projectsList: 	Projects.find().fetch()		
	}	
};




export default projectsReducer;