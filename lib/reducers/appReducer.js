import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import { routerReducer } from 'react-router-redux';
import accountReducer from "/lib/reducers/account";
import navigationReducer from "/lib/reducers/navigation";
import projectsReducer from "/lib/reducers/projects";
import graphReducer from "/lib/reducers/graph";

import formReducerPlugin from "/lib/reducers/formPlugin";


const appReducer = combineReducers({
    accountReducer,
    navigationReducer,
    projectsReducer,
    graphReducer,
    form: formReducer.plugin(formReducerPlugin),
    routing: routerReducer
});

export default appReducer;