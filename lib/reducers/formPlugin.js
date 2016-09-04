

const formReducerPlugin = {
    CreateProjectForm: ( state  = getInitialState(), action ) => {
        switch( action.type ) {
            case 'CREATE_PROJECT.ADD_MEMBER':
                return Object.assign({}, state, {
                    memberCounter:  state.memberCounter + 1,
                    membersList:    state.membersList.concat([{
                        key:        state.memberCounter,
                        label:      state.addMemberField
                    }]),
                    addMemberField: ""
                });
            case 'CREATE_PROJECT.AUTOCOMPLETE_MEMBER':
                return Object.assign({}, state, {
                    hintMembers:    action.hintMembers,
                    addMemberField: action.addMemberField
                });
            case 'CREATE_PROJECT.UPDATE_MEMBER_FIELD':
                return Object.assign({}, state, {
                    addMemberField: action.addMemberField
                });
            default:
                return state;
        }
    }
}


const getInitialState = () => {
    return {
        memberCounter:  0,
        membersList:    [],
        hintMembers:    [],
        addMemberField: ""
    }
};


export default formReducerPlugin;