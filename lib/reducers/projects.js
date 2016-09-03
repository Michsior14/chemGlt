import Projects from "/lib/collections/projects";


const projectsReducer = ( state = getInitialState(), action ) => {
	switch( action.type ){
		case 'UPDATE_PROJECTS_LIST':
			return Object.assign({}, state, {
				projectsList: 		action.projectsList
			});		
		default:
			return state;
	}
};

const getInitialState = () => {

	return {
		projectsList: 	Projects.find({
							members: Meteor.userId()
						}).fetch()		
	}	
};




export default projectsReducer;