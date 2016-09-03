

const formReducerPlugin = {
    CreateProjectForm: ( state, action ) => {
        switch( action.type ) {
            case 'AUTOCOMPLETE_PROJECT_MEMBER':
                return Object.assign({}, state, {
                    hintMembers: action.hintMembers
                });
            default:
                return state;
        }
    }
}


export default formReducerPlugin;