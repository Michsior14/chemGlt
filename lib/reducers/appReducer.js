import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import {routerReducer} from "react-router-redux";
import accountReducer from "/lib/reducers/account";
import navigationReducer from "/lib/reducers/navigation";
import projectsReducer from "/lib/reducers/projects";
<<<<<<< HEAD
import graphReducer from "/lib/reducers/graph";

=======
import textEditorReducer from "/lib/reducers/text_editor";
>>>>>>> 57cace3bfc8162b0f1f6e488a6009496961451a2
import formReducerPlugin from "/lib/reducers/formPlugin";


const appReducer = combineReducers({
    accountReducer,
    navigationReducer,
    projectsReducer,
    graphReducer,
    textEditorReducer,
    form: formReducer.plugin(formReducerPlugin),
    routing: routerReducer
});

export default appReducer;