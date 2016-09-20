import {Meteor} from "meteor/meteor";
import Projects from "/lib/collections/projects";


const projectsReducer = (state = getInitialState(), action) => {
	switch (action.type) {
		case "PROJECTS_SUBSCRIBED":
			return Object.assign({}, state, {
				projectsList: action.projectsList,
				waiting: false
			});
		case "UPDATE_PROJECTS_LIST":
			return Object.assign({}, state, {
				projectsList: action.projectsList
			});
		case "PROJECTS_ORDER_SUB":
			return Object.assign({}, state, {
				waiting: true
			});
		default:
			return state;
	}
};

const getInitialState = () => {
	return {
		waiting: false,
		projectsList: []
	};
};




export default projectsReducer;