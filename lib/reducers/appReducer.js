import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import accountReducer from "/lib/reducers/account";
import navigationReducer from "/lib/reducers/navigation";
import projectsReducer from "/lib/reducers/projects";


const appReducer = combineReducers({
    accountReducer,
    navigationReducer,
    projectsReducer,
    form: formReducer
});

export default appReducer;