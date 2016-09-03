import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import accountReducer from "/lib/reducers/account";
import navigationReducer from "/lib/reducers/navigation";
import projectsReducer from "/lib/reducers/projects";

import formReducerPlugin from "/lib/reducers/formPlugin";


const appReducer = combineReducers({
    accountReducer,
    navigationReducer,
    projectsReducer,
    form: formReducer.plugin(formReducerPlugin)
});

export default appReducer;